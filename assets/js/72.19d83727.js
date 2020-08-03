(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{634:function(t,_,e){"use strict";e.r(_);var v=e(48),d=Object(v.a)({},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Enviroment Variable")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("MONGO_URI")])]),t._v(" "),e("td",[t._v("URI to connect to MongoDB.")]),t._v(" "),e("td",[e("code",[t._v("mongodb://localhost/growi")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NO_CDN")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", system doesn't use CDN, all resources will be downloaded from CDN when build client, and served by the GROWI Express server.")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ELASTICSEARCH_URI")])]),t._v(" "),e("td",[t._v("URI to connect to Elasticearch.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ELASTICSEARCH_REQUEST_TIMEOUT")])]),t._v(" "),e("td",[t._v("Max request timeout in milliseconds for each request.(msec)")]),t._v(" "),e("td",[t._v("8000")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("REDIS_URI")])]),t._v(" "),e("td",[t._v("URI to connect to Redis (use it as a session store instead of MongoDB).")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PASSWORD_SEED")])]),t._v(" "),e("td",[t._v("A password seed used by password hash generator.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SECRET_TOKEN")])]),t._v(" "),e("td",[t._v("A secret key for verifying the integrity of signed cookies.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SESSION_NAME")])]),t._v(" "),e("td",[t._v("The name of the session ID cookie to set in the response by Express.")]),t._v(" "),e("td",[e("code",[t._v("connect.sid")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", the system uses only the value of the environment variable as the value of the SAML option that can be set via the environment variable.")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FORCE_WIKI_MODE")])]),t._v(" "),e("td",[t._v("Forces wiki mode.")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("undefined")]),t._v(" Publicity will be configured by the admin security page settings")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("public")]),t._v(" Forces all pages to become public")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("private")]),t._v(" Forces all pages to become private")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FORMAT_NODE_LOG")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("false")]),t._v(", Output server log as JSON. (Enabled only when "),e("code",[t._v("NODE_ENV=production")]),t._v(")")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("MATHJAX")])]),t._v(" "),e("td",[t._v("(TBD)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USER_UPPER_LIMIT")])]),t._v(" "),e("td",[t._v("(TBD)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Option for file uploading")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FILE_UPLOAD")])]),t._v(" "),e("td",[t._v("Attached files storage.")]),t._v(" "),e("td",[e("code",[t._v("aws")])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("aws")]),t._v(" Amazon Web Service S3 (needs AWS settings on Admin page)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("gcs")]),t._v(" Google Cloud Storage (needs settings with environment variables)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("mongodb")]),t._v(" MongoDB GridFS (Setting-less)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("local")]),t._v(" Server's Local file system (Setting-less)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("none")]),t._v(" Disable file uploading")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FILE_UPLOAD_DISABLED")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", file uploading will be disabled. However, the files can be still viewed.")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("MAX_FILE_SIZE")])]),t._v(" "),e("td",[t._v("The maximum file size limit for uploads (bytes).")]),t._v(" "),e("td",[e("code",[t._v("Infinity")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FILE_UPLOAD_TOTAL_LIMIT")])]),t._v(" "),e("td",[t._v("Total capacity limit for uploads (bytes).")]),t._v(" "),e("td",[e("code",[t._v("Infinity")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("GCS_API_KEY_JSON_PATH")])]),t._v(" "),e("td",[t._v("Path of the JSON file that contains "),e("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("service account key to authenticate to GCP API"),e("OutboundLink")],1)]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("GCS_BUCKET")])]),t._v(" "),e("td",[t._v("Name of the GCS bucket")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("GCS_UPLOAD_NAMESPACE")])]),t._v(" "),e("td",[t._v("Directory name to create in the bucket")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Option to integrate with external systems")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NCHAN_URI")])]),t._v(" "),e("td",[t._v("URI to connect to Nginx "),e("a",{attrs:{href:"https://nchan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nchan"),e("OutboundLink")],1),t._v(" server.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("HACKMD_URI")])]),t._v(" "),e("td",[t._v("URI to connect to "),e("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HackMD(CodiMD)"),e("OutboundLink")],1),t._v(" server.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("This server must load the GROWI agent. "),e("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/integrate-with-hackmd.html"}},[t._v("Here's how to prepare it")]),t._v(".")],1),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("HACKMD_URI_FOR_SERVER")])]),t._v(" "),e("td",[t._v("URI to connect to "),e("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HackMD(CodiMD)"),e("OutboundLink")],1),t._v(" server from GROWI Express server. If not set, "),e("code",[t._v("HACKMD_URI")]),t._v(" will be used.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PLANTUML_URI")])]),t._v(" "),e("td",[t._v("URI to connect to "),e("a",{attrs:{href:"http://plantuml.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlantUML"),e("OutboundLink")],1),t._v(" server.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("BLOCKDIAG_URI")])]),t._v(" "),e("td",[t._v("URI to connect to "),e("a",{attrs:{href:"http://http://blockdiag.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("blockdiag"),e("OutboundLink")],1),t._v(" server.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("DRAWIO_URI")])]),t._v(" "),e("td",[t._v("URI to connect to "),e("a",{attrs:{href:"https://www.diagrams.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("diagrams.net(draw.io)"),e("OutboundLink")],1),t._v(" server.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S2SMSG_PUBSUB_SERVER_TYPE")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("nchan")]),t._v(" Nginx "),e("a",{attrs:{href:"https://nchan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nchan"),e("OutboundLink")],1)]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v(": "),e("code",[t._v("redis")]),t._v(" (Not implemented yet)")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S2SMSG_PUBSUB_NCHAN_PUBLISH_PATH")])]),t._v(" "),e("td",[t._v("Publisher endpoint path for Nchan server")]),t._v(" "),e("td",[e("code",[t._v("/pubsub")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S2SMSG_PUBSUB_NCHAN_SUBSCRIBE_PATH")])]),t._v(" "),e("td",[t._v("Subscriber endpoint path for Nchan server")]),t._v(" "),e("td",[e("code",[t._v("/pubsub")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S2SMSG_PUBSUB_NCHAN_CHANNEL_ID")])]),t._v(" "),e("td",[t._v("The channel id to connect to Nchan server")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Option (Overwritable in admin page)")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("APP_SITE_URL")])]),t._v(" "),e("td",[t._v("Site URL. e.g. "),e("code",[t._v("https://example.com")]),t._v(", "),e("code",[t._v("https://example.com:8080")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("LOCAL_STRATEGY_ENABLED")])]),t._v(" "),e("td",[t._v("Enable or disable ID/Pass login")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),e("td",[t._v("Prioritize env vars than values in DB for some ID/Pass login options")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ENABLED")])]),t._v(" "),e("td",[t._v("Enable or disable SAML")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),e("td",[t._v("Prioritize env vars than values in DB for some SAML options")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ENTRY_POINT")])]),t._v(" "),e("td",[t._v("IdP entry point")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ISSUER")])]),t._v(" "),e("td",[t._v("Issuer string to supply to IdP")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ATTR_MAPPING_ID")])]),t._v(" "),e("td",[t._v("Attribute map for id")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ATTR_MAPPING_USERNAME")])]),t._v(" "),e("td",[t._v("Attribute map for username")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ATTR_MAPPING_MAIL")])]),t._v(" "),e("td",[t._v("Attribute map for email")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ATTR_MAPPING_FIRST_NAME")])]),t._v(" "),e("td",[t._v("Attribute map for first name")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_ATTR_MAPPING_LAST_NAME")])]),t._v(" "),e("td",[t._v("Attribute map for last name")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SAML_CERT")])]),t._v(" "),e("td",[t._v("PEM-encoded X.509 signing certificate string to validate the response from IdP")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_GOOGLE_CLIENT_ID")])]),t._v(" "),e("td",[t._v("Google API client id for OAuth login.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_GOOGLE_CLIENT_SECRET")])]),t._v(" "),e("td",[t._v("Google API client secret for OAuth login.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_GITHUB_CLIENT_ID")])]),t._v(" "),e("td",[t._v("GitHub API client id for OAuth login.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_GITHUB_CLIENT_SECRET")])]),t._v(" "),e("td",[t._v("GitHub API client secret for OAuth login.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_TWITTER_CONSUMER_KEY")])]),t._v(" "),e("td",[t._v("Twitter consumer key(API key) for OAuth login.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OAUTH_TWITTER_CONSUMER_SECRET")])]),t._v(" "),e("td",[t._v("Twitter consumer secret(API secret) for OAuth login.")]),t._v(" "),e("td")])])])])},[],!1,null,null,null);_.default=d.exports}}]);