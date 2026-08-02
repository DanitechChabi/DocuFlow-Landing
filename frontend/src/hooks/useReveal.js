import { useEffect, useRef, useState } from 'react';

/**
 * Hook d'apparition au scroll (IntersectionObserver).
 * Ajoute la classe visible quand l'élément entre dans le viewport.
 * @param {Object} options - threshold, rootMargin, delay (ms), once
 * @returns {Array} [ref, visible]
 */
export function useReveal({ threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true, delay = 0 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible, delay];
}

/**
 * Composant d'enveloppe : applique la classe d'animation d'apparition au scroll.
 * @param {String} animation - classe CSS (ex: 'animate-fade-in-up')
 * @param {Number} delay - délai en ms
 * @param {Object} style - styles additionnels
 */
export const Reveal = ({
  children,
  animation = 'animate-fade-in-up',
  delay = 0,
  className = '',
  threshold,
  rootMargin,
  once = true,
  ...props
}) => {
  const [ref, visible] = useReveal({ threshold, rootMargin, once });
  return (
    <div
      ref={ref}
      className={`${visible ? animation : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default useReveal;
