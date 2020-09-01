import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  //if (process.env.NODE_ENV === `production`) {
  const { id } = pluginOptions;
  return setPostBodyComponents([
    <>
      <script
        type="text/javascript"
        src={`https://secure.leadforensics.com/js/${id}.js`}
      ></script>
      <noscript>
        <img
          alt=""
          src={`https://secure.leadforensics.com/${id}.png`}
          style={{ display: "none" }}
        />
      </noscript>
    </>
  ]);
  // }

  return null;
};
