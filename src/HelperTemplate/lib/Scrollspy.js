import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Helpers from './helpers'

export default class Scrollspy extends React.Component {
  static get propTypes() {
    return {
      tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      componentClass: PropTypes.string,
      scrolledPastClassName: PropTypes.string,
      active: PropTypes.string,
      level: PropTypes.number,
      offset: PropTypes.number,
      timeout: PropTypes.number,
      rootEl: PropTypes.string,
      animete: PropTypes.object,
      onUpdate: PropTypes.func
    }
  }

  static get defaultProps () {
    return {
      tag: 'ul',
      componentClass: '',
      active: 'active',
      level: 1,
      offset: 0,
      timeout: 500,
      animete: { behavior: 'smooth', block: 'start' },
      onUpdate() {},
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [],
      items: []
    }
    this._handleSpy = this._handleSpy.bind(this)
    this.goScrollTag = this.goScrollTag.bind(this)
  }

  _initProps () {
    let childrenTag = [],  { children }  = this.props
    React.Children.map(children, (child) => {
      if (!child) {
        return null
      }
      let tmpChild = this._getLevelChildren(child.props)
      if (tmpChild) {
        childrenTag.push(tmpChild)
      }
    })

    const targetItems = this._initSpyTargetItems(childrenTag)
    this.setState({
      targetItems,
    })

    this._spy(targetItems)
  }

  _setListItems () {
    let items = [],  { children }  = this.props
    React.Children.map(children, (child) => {
      if (!child) {
        return null
      }
      let tmpChild = this._getLevelChildren(child.props)
      if (tmpChild) {
        items.push(tmpChild)
      }
    })
    this.setState({ items })
  }

  _spy (targets) {
    const elemensViewState = this._getElemsViewState(targets)
    const currentStatuses = this.state.inViewState

    this.setState({
      inViewState: elemensViewState.viewStatusList,
      isScrolledPast: elemensViewState.scrolledPast
    }, () => {
      this._update(currentStatuses)
    })
  }

  _handleSpy () {
    Helpers.throttle(this._spy(), 100)
  }

  goScrollTag(event, tag) {
    event.stopPropagation();
    event.preventDefault();

    const { animete, timeout } = this.props
    document.getElementById(tag).scrollIntoView(animete)

    setTimeout(() => {
      window.location.hash = '#' + tag
    }, timeout);
  }

  // OLDERS
  _getLevelChildren (child) {
    let resultChildren = [], { level } = this.props
    for (let i = 0; i < level; i++) {
      resultChildren = child.children.props
    }
    if (!resultChildren.href) {
      return
    }
    return resultChildren.href.split('#')[1]
  }

  _initSpyTargetItems (items) {
    return items.map((item) => {
      return document.getElementById(item)
    })
  }

  _getElemsViewState (targets) {
    const targetItems = targets ? targets : this.state.targetItems
    let hasInViewAlready = false
    let elemsInView = []
    let elemsOutView = []
    let viewStatusList = []

    for (let i = 0, max = targetItems.length; i < max; i++) {
      let currentContent = targetItems[i]
      let isInView = hasInViewAlready ? false : this._isInView(currentContent)
      if (isInView) {
        hasInViewAlready = true
        elemsInView.push(currentContent)
      } else {
        elemsOutView.push(currentContent)
      }

      const isLastItem = i === max - 1
      const isScrolled = this._isScrolled()
      const isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled

      if (isLastShortItemAtBottom) {
        elemsOutView.pop()
        elemsOutView.push(...elemsInView)
        elemsInView = [currentContent]
        viewStatusList = Helpers.fillArray(viewStatusList, false)
        isInView = true
      }

      viewStatusList.push(isInView)
    }

    return {
      inView: elemsInView,
      outView: elemsOutView,
      viewStatusList,
      scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList),
    }
  }

  _isInView (el) {
    if (!el) { return false }
    const { rootEl, offset } = this.props
    let rootRect
    if (rootEl) { rootRect = document.querySelector(rootEl).getBoundingClientRect() }

    const rect = el.getBoundingClientRect()
    const winH = rootEl ? rootRect.height : window.innerHeight
    const { scrollTop } = this._getScrollDimension()
    const scrollBottom = scrollTop + winH
    const elTop = rootEl ?
      rect.top + scrollTop - rootRect.top + offset
      :
      rect.top + scrollTop + offset
    const elBottom = elTop + el.offsetHeight

    return (elTop < scrollBottom) && (elBottom > scrollTop)
  }

  _getScrollDimension () {
    const { rootEl } = this.props
    const scrollTop = rootEl ? document.querySelector(rootEl).scrollTop : (document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop)
    const scrollHeight = rootEl ? document.querySelector(rootEl).scrollHeight : (document.documentElement.scrollHeight || document.body.parentNode.scrollHeight || document.body.scrollHeight)
    return { scrollTop, scrollHeight }
  }

  _isAtBottom () {
    const { rootEl } = this.props
    const { scrollTop, scrollHeight } = this._getScrollDimension()
    const winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight
    const scrolledToBottom = (scrollTop + winH) >= scrollHeight
    return scrolledToBottom
  }

  _isScrolled () {
    return this._getScrollDimension().scrollTop > 0
  }

  _getScrolledPast (viewStatusList) {
    if (!viewStatusList.some((item) => item)) { return viewStatusList }
    let hasFoundInView = false
    const scrolledPastItems = viewStatusList.map((item) => {
      if (item && !hasFoundInView) {
        hasFoundInView = true
        return false
      }
      return !hasFoundInView
    })
    return scrolledPastItems
  }

  _update (prevStatuses) {
    const { inViewState, targetItems } = this.state
    if (Helpers.isEqualArray(inViewState, prevStatuses)) { return }
    this.props.onUpdate(targetItems[inViewState.indexOf(true)])
  }

  offEvent() {
    let { rootEl } = this.props
    const el = rootEl ? document.querySelector(rootEl) : window
    el.removeEventListener('scroll', this._handleSpy)
  }

  onEvent() {
    let { rootEl } = this.props
    const el = rootEl ? document.querySelector(rootEl) : window
    el.addEventListener('scroll', this._handleSpy)
  }

  componentDidMount () {
    this._initProps()
    this._setListItems()
    this.onEvent()
  }

  componentWillUnmount () {
    this.offEvent()
  }

  componentWillReceiveProps () {
    this._initFromProps()
  }

  _setScrollSelectNav() {
    this.onEvent()
    const { inViewState, items } = this.state
    if( inViewState.indexOf(true) !== -1 ) {
      let hash, currentHash, indexView = inViewState.indexOf(true)
      hash = items[indexView]
      currentHash = window.location.hash.split('#')[1]
      let currentIndex = items.indexOf(currentHash)
      if ( hash ) {
        if( currentIndex < indexView ) {
          window.location.hash = '#' + hash
        }
      }
    }
  }

  render() {
    const { children, className = '', tag } = this.props
    const { inViewState } = this.state
    const TagComponent = tag
    let counter = 0
    const items = React.Children.map(children, (child, idx) => {
      if (!child) {
        return null
      }
      const ChildTag = child.type
      const elementID = this._getLevelChildren(child.props)
      const childClass = classNames({
        [`${ child.props.className }`]: child.props.className || '',
        [`${ this.props.active }`]: inViewState[idx]
      })
      this._setScrollSelectNav()
      return (
        <ChildTag { ...child.props } className={ childClass } key={ counter++ } onClick={(event) => this.goScrollTag(event, elementID)} >
          { child.props.children }
        </ChildTag>
      )
    })

    return (
      <TagComponent className={ className }>
        { items }
      </TagComponent>
    )
  }
}
