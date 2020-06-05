import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Footer from "components/Footer";
import styled from "styled-components";


const StyledBody = styled.div`
font-size: 13px;
`

const styles = (theme) => ({
  root: {
    minHeight: "100vh"
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto"
  },
  article: {
    padding: theme.spacing.unit * 0
  }
});

@withStyles(styles, { name: "SkLayout" })
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, children, shop, viewer } = this.props;

    return (
      <React.Fragment>
        <StyledBody className={classes.root}>
          <Header shop={shop} viewer={viewer} />
          <main className={classes.main}>
            <article className={classes.article}>{children}</article>
          </main>
          <Footer />
        </StyledBody>
      </React.Fragment>
    );
  }
}

export default Layout;
