import { Fragment } from "react"

import { useMediaQuery, styled, useTheme } from "@mui/system"
import themeConfig from '@/configs/themeConfig'

const MaskImg = styled('img')(() => ({
  bottom: 0,
  zIndex: -1,
  width: '100%',
  position: 'absolute'
}))

const TreeImg = styled('img')(({ theme }) => ({
  left: `calc(2.25rem + ${themeConfig.navigationSize}px)`,
  bottom: '4.25rem',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    left: 0,
    bottom: 0
  }
}))

const FooterIllustrations = ({ image }) => {
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  if (!hidden) {
    return (
      <Fragment>
        { image || <TreeImg alt='tree' src='/images/tree-2.png' /> }
        <MaskImg alt='mask' src={`/images/misc-mask-${theme.palette.mode}.png`} />
      </Fragment>
    )
  } else {
    return null
  }
}

export default FooterIllustrations
