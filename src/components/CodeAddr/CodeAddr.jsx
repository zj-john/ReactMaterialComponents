import React from "react";
import PropTypes from "prop-types";

function CodeAddr({ ...props }) {
  const { classes, addr } = props;
  let code_addr = "https://github.com/zj-john/ReactMaterialComponents/blob/master/src/pages/" + addr;
  return (
    <div>
      <a href={code_addr} target="_blank" style={{textDecoration: 'underline'}}>
        <h2>代码地址</h2>
      </a>
      <hr />
    </div>
  );
}

CodeAddr.propTypes = {
  addr: PropTypes.node
};

export default CodeAddr;
