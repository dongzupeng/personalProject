const observer = new IntersectionObserver(observerCb, {
    root: null,
    threshold: [0],
    rootMargin: '30px'
})

function lazyLoad(el, binding) {
    const src = el.getAttribute('src')
    if (src) {
        el.setAttribute('lazy-load', 'loaded')
        return
    }
    const { value } = binding
    el.setAttribute('lazy-load-src', value)
    el.setAttribute('lazy-load', 'loading')
    observer.observe(el)
}

function observerCb(entries) {
    entries.forEach(item => {
        if (item.intersectionRatio > 0) {
            const el = item.target
            const isLoaded = el.getAttribute('lazy-load')
            if (isLoaded === 'loaded') {
                observer.unobserve(el)
            } else {
                const src = el.getAttribute('lazy-load-src')
                el.setAttribute('src', src)
                el.setAttribute('lazy-load', 'loaded')
                observer.unobserve(el)
            }
        }
    });
}

export default lazyLoad

