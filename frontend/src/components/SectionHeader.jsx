import React from 'react';

/**
 * En-tête de section réutilisable : pilule sur-titre + H2 + sous-texte.
 */
const SectionHeader = ({ pill, title, subtitle, align = 'center', titleClassName = '' }) => {
  const alignCls = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`${alignCls} mb-12 md:mb-16 animate-fade-in-up`}>
      {pill && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-afgc-secondary/8 border border-afgc-secondary/15 text-afgc-secondary text-xs font-bold uppercase tracking-widest mb-5">
          {pill}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-afgc-primary tracking-tight leading-[1.1] mb-5 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-slate-500 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
