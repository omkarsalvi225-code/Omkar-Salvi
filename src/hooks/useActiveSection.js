import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds, { rootMargin = '-25% 0px -65% 0px' } = {}) {
  const ids = useMemo(() => sectionIds ?? [], [sectionIds])
  const [activeId, setActiveId] = useState(ids[0] ?? 'home')

  useEffect(() => {
    if (!ids.length) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { root: null, threshold: [0.12, 0.25, 0.4, 0.6], rootMargin },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}

