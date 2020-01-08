import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";
 
CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerEditorComponent({
      id: "youtube",
      label: "Youtube",
      fields: [{name: 'id', label: 'Youtube Video ID'}],
      pattern: /^{{<\s?youtube (\S+)\s?>}}/,
      fromBlock: function(match) {
        return {
          id: match[1]
        };
      },
      toBlock: function(obj) {
        return '{{< youtube ' + obj.id + ' >}}';
      },
      toPreview: function(obj) {
        return (
          '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
        );
      }
    });
CMS.init();
