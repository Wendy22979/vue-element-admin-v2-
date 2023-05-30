import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

// 拼接头部title
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
