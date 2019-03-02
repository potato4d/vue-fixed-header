export function getTargetTag(userAgent: string): 'html' | 'body' {
  if (userAgent.includes('Edge')) {
    return 'body'
  }
  if (userAgent.includes('Firefox/') && +userAgent.split('Firefox/')[1] >= 62) {
    return 'html'
  }
  if (
    !(window as any).chrome &&
    'WebkitAppearance' in (document.documentElement as any).style
  ) {
    return 'body'
  }
  return 'html'
}
