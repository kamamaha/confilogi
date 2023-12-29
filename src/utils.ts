export const handleOpenModalAfterTime = (openCallback: () => void) => {
  const timer = setTimeout(() => {
    openCallback()
  }, 30000)
  return () => clearTimeout(timer)
}
