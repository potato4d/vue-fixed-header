export function getTargetTag(userAgent: string): 'html' | 'body' {
  if (userAgent.includes('Edge')) {
    return 'body'
  }
  if (userAgent.includes('Firefox/') && +userAgent.split('Firefox/')[1] >= 62) {
    return 'html'
  }
  if (userAgent.includes('Chrome') && !userAgent.includes('opr')) {
    return 'html'
  }
  return 'html'
}
