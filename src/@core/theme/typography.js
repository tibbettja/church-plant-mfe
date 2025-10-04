const Typography = (theme) => {
  return {
    h1: {
      fontWeight: 700,
      fontSize: '40pt',
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontWeight: 500,
      fontSize: '36pt',
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontWeight: 500,
      fontSize: '32pt',
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontWeight: 500,
      fontSize: '28pt',
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontWeight: 500,
      fontSize: '24pt',
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h6: {
      letterSpacing: '0.15px',
      fontSize: '20pt',
      color: theme.palette.text.primary
    },
    subtitle1: {
      letterSpacing: '0.15px',
      fontSize: '10pt',
      color: theme.palette.text.primary
    },
    subtitle2: {
      letterSpacing: '0.1px',
      fontSize: '10pt',
      color: theme.palette.text.secondary
    },
    body1: {
      letterSpacing: '0.15px',
      fontSize: '16pt',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.5,
      letterSpacing: '0.15px',
      fontSize: '16pt',
      color: theme.palette.text.secondary
    },
    button: {
      letterSpacing: '0.3px',
      fontSize: '12pt',
      color: theme.palette.text.primary
    },
    caption: {
      letterSpacing: '0.4px',
      fontSize: '8pt',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      fontSize: '8pt',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography
