// RTL/LTR Utility Functions

export const getCurrentLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'ar';
  }
  return 'ar';
};

export const isRTL = (): boolean => {
  return getCurrentLanguage() === 'ar';
};

export const getSpacingClass = (baseClass: string): string => {
  const language = getCurrentLanguage();
  
  // Handle space-x classes
  if (baseClass.includes('space-x-')) {
    return language === 'ar' ? baseClass.replace('space-x-', 'space-x-reverse-') : baseClass;
  }
  
  // Handle space-y classes (usually don't need changes)
  if (baseClass.includes('space-y-')) {
    return baseClass;
  }
  
  // Handle margin and padding classes
  if (baseClass.includes('ml-') || baseClass.includes('pl-')) {
    return language === 'ar' 
      ? baseClass.replace(/ml-/g, 'mr-').replace(/pl-/g, 'pr-')
      : baseClass;
  }
  
  if (baseClass.includes('mr-') || baseClass.includes('pr-')) {
    return language === 'ar' 
      ? baseClass.replace(/mr-/g, 'ml-').replace(/pr-/g, 'pl-')
      : baseClass;
  }
  
  // Handle text alignment
  if (baseClass.includes('text-left')) {
    return language === 'ar' ? 'text-right' : 'text-left';
  }
  
  if (baseClass.includes('text-right')) {
    return language === 'ar' ? 'text-left' : 'text-right';
  }
  
  // Handle flex direction
  if (baseClass.includes('flex-row')) {
    return language === 'ar' ? 'flex-row-reverse' : 'flex-row';
  }
  
  if (baseClass.includes('flex-row-reverse')) {
    return language === 'ar' ? 'flex-row' : 'flex-row-reverse';
  }
  
  return baseClass;
};

export const getDirectionalClass = (ltrClass: string, rtlClass: string): string => {
  return isRTL() ? rtlClass : ltrClass;
};

export const getSpacingClasses = (baseClasses: string[]): string => {
  return baseClasses.map(getSpacingClass).join(' ');
};

// Common RTL/LTR class combinations
export const RTL_CLASSES = {
  // Text alignment
  textAlign: {
    rtl: 'text-right',
    ltr: 'text-left'
  },
  
  // Flex direction
  flexDirection: {
    rtl: 'flex-row-reverse',
    ltr: 'flex-row'
  },
  
  // Spacing
  spacing: {
    rtl: 'space-x-reverse',
    ltr: 'space-x'
  },
  
  // Margins
  margin: {
    rtl: 'mr-auto',
    ltr: 'ml-auto'
  },
  
  // Padding
  padding: {
    rtl: 'pr-4',
    ltr: 'pl-4'
  }
};

export const getRTLClass = (key: keyof typeof RTL_CLASSES): string => {
  return isRTL() ? RTL_CLASSES[key].rtl : RTL_CLASSES[key].ltr;
};
