const Card = (theme) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[2],
        '& .card-more-options': {
          marginTop: theme.spacing(-1),
          marginRight: theme.spacing(-3)
        },
        borderRadius: '1px',
        variants: [
          {
            props: { raised: true },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.info.dark}, 0 0 0.5em 0 ${theme.palette.info.main}`,
              border: `solid 1px ${theme.palette.info.light}`,
              color: theme.palette.info.light,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    }
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
          paddingTop: 0
        }
      },
      title: {
        lineHeight: 1,
        fontWeight: 500,
        fontSize: '20pt',
        letterSpacing: '0.0125em'
      },
      action: {
        marginTop: 0,
        marginRight: 0
      },
      subheader: {
        fontSize: '10pt'
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        '& + .MuiCardContent-root': {
          paddingTop: 0
        },
        // '& :last-of-type': {
        //   paddingBottom: theme.spacing(5)
        // },
        '& + .MuiCardActions-root': {
          paddingTop: 0
        }
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        '& .card-action-dense': {
          padding: theme.spacing(0, 2.5, 2.5),
          '.MuiCard-root .MuiCardMedia-root + &': {
            paddingTop: theme.spacing(2.5)
          },
          '.MuiCard-root &:first-of-type': {
            paddingY: theme.spacing(5),
            '& + .MuiCardContent-root': {
              paddingTop: 0
            },
            '& + .MuiCardHeader-root': {
              paddingTop: 0
            }
          }
        },
        '& .MuiButton-text': {
          paddingX: theme.spacing(2.5)
        }
      }
    }
  }
})

export default Card
