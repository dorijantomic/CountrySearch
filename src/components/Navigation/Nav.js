import React from 'react'
import {withStyles , AppBar, Toolbar, Typography} from '@material-ui/core'

const styles = {
    AppBar:{
        paddingBottom: '150px'
    }
}

const Nav = (props) => {
    const { classes } = props
  return (
    <div className={classes.AppBar}>
      <AppBar>
          <Toolbar>
              <Typography variant='title'>Where In the World ?</Typography>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Nav)
