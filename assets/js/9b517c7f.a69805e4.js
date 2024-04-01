"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6501],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),g=r,c=s["".concat(p,".").concat(g)]||s[g]||u[g]||o;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"swagger-codegen-migration",title:"Migrating from Swagger Codegen"},p=void 0,d={unversionedId:"swagger-codegen-migration",id:"swagger-codegen-migration",title:"Migrating from Swagger Codegen",description:"OpenAPI Generator is a fork of swagger-codegen between version 2.3.1 and 2.4.0. For the reasons behind the fork, please refer to the Q&A.",source:"@site/../docs/migration-from-swagger-codegen.md",sourceDirName:".",slug:"/swagger-codegen-migration",permalink:"/docs/swagger-codegen-migration",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/migration-from-swagger-codegen.md",tags:[],version:"current",lastUpdatedBy:"Nathan Baulch",lastUpdatedAt:1667827824,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"swagger-codegen-migration",title:"Migrating from Swagger Codegen"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/roadmap"},next:{title:"Swagger Codegen Fork: Q&A",permalink:"/docs/fork-qna"}},m={},s=[{value:"New docker images",id:"new-docker-images",level:2},{value:"New maven coordinates",id:"new-maven-coordinates",level:2},{value:"Changes in Maven Plugin",id:"changes-in-maven-plugin",level:2},{value:"New generators names",id:"new-generators-names",level:2},{value:"New parameters name",id:"new-parameters-name",level:2},{value:"Renamed Mustache Template Variables",id:"renamed-mustache-template-variables",level:2},{value:"Ignore file",id:"ignore-file",level:2},{value:"Metadata folder",id:"metadata-folder",level:2},{value:"New default values for the generated code",id:"new-default-values-for-the-generated-code",level:2},{value:"New fully qualified name for the classes",id:"new-fully-qualified-name-for-the-classes",level:2},{value:"Body parameter name",id:"body-parameter-name",level:2},{value:"Default basePath",id:"default-basepath",level:2},{value:"Nullable",id:"nullable",level:2}],u={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenAPI Generator is a fork of ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger-codegen")," between version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.3.1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2.4.0"),". For the reasons behind the fork, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/blob/master/docs/qna.md"},"Q&A"),'.\nThis community-driven version called "OpenAPI Generator" provides similar functionalities and can be used as drop-in replacement.\nThis guide explains the major differences in order to help you with the migration.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table of contents")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-docker-images"},"New docker images")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-maven-coordinates"},"New maven coordinates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#changes-in-maven-plugin"},"Changes in Maven Plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-generators-names"},"New generators names")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-parameters-name"},"New parameters name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#renamed-mustache-template-variables"},"Renamed Mustache Template Variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ignore-file"},"Ignore file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#metadata-folder"},"metadata-folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-default-values-for-the-generated-code"},"New default values for the generated code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-fully-qualified-name-for-the-classes"},"New fully qualified name for the classes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#body-parameter-name"},"Body parameter name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-basepath"},"Default basePath")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nullable"},"Nullable"))),(0,o.kt)("h2",{id:"new-docker-images"},"New docker images"),(0,o.kt)("p",null,"The docker images are available on DockerHub: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/openapitools/"},"https://hub.docker.com/u/openapitools/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI for OpenAPI Generator")),(0,o.kt)("p",null,"Image to run OpenAPI Generator in the command line (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/blob/master/README.md#openapi-generator-cli-docker-image"},"OpenAPI Generator CLI Docker Image"),")"),(0,o.kt)("p",null,"Old: ",(0,o.kt)("inlineCode",{parentName:"p"},"swaggerapi/swagger-codegen-cli")),(0,o.kt)("p",null,"New: ",(0,o.kt)("inlineCode",{parentName:"p"},"openapitools/openapi-generator-cli")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OpenAPI Generator as web service")),(0,o.kt)("p",null,"Image to run OpenAPI Generator as a web service (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/blob/master/README.md#openapi-generator-online-docker-image"},"OpenAPI Generator Online Docker Image"),")"),(0,o.kt)("p",null,"Old: ",(0,o.kt)("inlineCode",{parentName:"p"},"swaggerapi/swagger-generator")),(0,o.kt)("p",null,"New: ",(0,o.kt)("inlineCode",{parentName:"p"},"openapitools/openapi-generator-online")),(0,o.kt)("h2",{id:"new-maven-coordinates"},"New maven coordinates"),(0,o.kt)("p",null,"You can find our released artefact on maven central:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Core:")),(0,o.kt)("p",null,"Old:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"New:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cli:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen-cli</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"New:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-cli</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Maven plugin:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.swagger</groupId>\n    <artifactId>swagger-codegen-maven-plugin</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"New:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n</dependency>\n")),(0,o.kt)("h2",{id:"changes-in-maven-plugin"},"Changes in Maven Plugin"),(0,o.kt)("p",null,"OpenAPI Generator 3.0.0 has introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"<generatorName>")," and deprecated ",(0,o.kt)("inlineCode",{parentName:"p"},"<language>"),', because this refers to generator names which embed more than just "language".'),(0,o.kt)("p",null,"If both options are present, you'll be presented with an error. If only ",(0,o.kt)("inlineCode",{parentName:"p"},"<language>")," is provided, you'll be presented instructions for updating to the new config."),(0,o.kt)("h2",{id:"new-generators-names"},"New generators names"),(0,o.kt)("p",null,"When you run OpenAPI Generator, you need to select a target generator (",(0,o.kt)("inlineCode",{parentName:"p"},"-g")," option in the cli).\nAll languages of ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger-codegen")," have been migrated to ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi-generator"),", but some names were changed, in order to be more consistent."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name in ",(0,o.kt)("inlineCode",{parentName:"th"},"swagger-codegen")),(0,o.kt)("th",{parentName:"tr",align:null},"name in ",(0,o.kt)("inlineCode",{parentName:"th"},"openapi-generator")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"akka-scala")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scala-akka"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scala")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scala-httpclient"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jaxrs")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jaxrs-jersey"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"qt5cpp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cpp-qt5"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cpprest")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cpp-restsdk"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tizen")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cpp-tizen"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sinatra")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ruby-sinatra"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swift")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swift2-deprecated"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"lumen")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"php-lumen"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"slim")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"php-slim"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ze-ph")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"php-mezzio-ph"))))),(0,o.kt)("p",null,"We provide a temporary mapping in code for these old values. You'll receive a warning with instructions to migrate to the new names."),(0,o.kt)("h2",{id:"new-parameters-name"},"New parameters name"),(0,o.kt)("p",null,'Some parameters were renamed.\nOften you need to replace "Swagger", with "OpenAPI".\nSome examples:'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name in ",(0,o.kt)("inlineCode",{parentName:"th"},"swagger-codegen")),(0,o.kt)("th",{parentName:"tr",align:null},"name in ",(0,o.kt)("inlineCode",{parentName:"th"},"openapi-generator")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"debugSwagger")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"debugOpenAPI"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GenerateSwaggerMetadata")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GenerateOpenAPIMetadata"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swagger.codegen.undertow.apipackage")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openapi.codegen.undertow.apipackage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swagger.codegen.undertow.modelpackage")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openapi.codegen.undertow.modelpackage"))))),(0,o.kt)("h2",{id:"renamed-mustache-template-variables"},"Renamed Mustache Template Variables"),(0,o.kt)("p",null,"The template variable ",(0,o.kt)("inlineCode",{parentName:"p"},"{{datatype}}")," was renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"{{dataType}}")," for consistency reason.\nCorresponding java code: ",(0,o.kt)("inlineCode",{parentName:"p"},"CodegenProperty.datatype")," is renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"CodegenProperty.dataType"),"."),(0,o.kt)("p",null,"(If you're ",(0,o.kt)("strong",{parentName:"p"},"not")," using customized templates with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," option, you can ignore the mustache variable renaming above.)"),(0,o.kt)("h2",{id:"ignore-file"},"Ignore file"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".swagger-codegen-ignore")," is replaced by ",(0,o.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore"),".\nThe syntax inside the file stays the same."),(0,o.kt)("p",null,"You don't need to rename the file manually, OpenAPI Generator will do it when your run it against an existing output directory.\n(When there is no ",(0,o.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," in a folder, if a ",(0,o.kt)("inlineCode",{parentName:"p"},".swagger-codegen-ignore")," file is present it will be considered and renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore"),")."),(0,o.kt)("h2",{id:"metadata-folder"},"Metadata folder"),(0,o.kt)("p",null,"The metadata folder (to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION")," file for example) is now called ",(0,o.kt)("inlineCode",{parentName:"p"},".openapi-generator/")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".swagger-codegen/"),"."),(0,o.kt)("h2",{id:"new-default-values-for-the-generated-code"},"New default values for the generated code"),(0,o.kt)("p",null,"If you use a generator without specifying each parameter, you might see some differences in the generated code.\nAs example the default package name used in the generated code has changed.\nYou need to have a look at the specific value, depending on your target language, but often ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \xees replaced by ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAPITools")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"io.swagger")," is replaced by ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openapitools"),".\nConcretely if you did not specify anything when you are generating java code, a file ",(0,o.kt)("inlineCode",{parentName:"p"},"org/openapitools/api/PetApi.java"),"  might be generated instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"io/swagger/api/PetApi.java"),"."),(0,o.kt)("p",null,"If this is a problem for you, you need to explicitly set the parameter value in order to match with the ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger-codegen")," default value (",(0,o.kt)("inlineCode",{parentName:"p"},"apiPackage")," == ",(0,o.kt)("inlineCode",{parentName:"p"},"io.swagger")," in the previous example with the java generator)."),(0,o.kt)("h2",{id:"new-fully-qualified-name-for-the-classes"},"New fully qualified name for the classes"),(0,o.kt)("p",null,"If you have extended some generators in your project, and you are looking for a specific class, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"io.swagger.codegen")," package (old name) with ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openapitools.codegen")," package (new name)."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"org.openapitools.codegen.DefaultGenerator")),(0,o.kt)("h2",{id:"body-parameter-name"},"Body parameter name"),(0,o.kt)("p",null,"\u203c\ufe0f Since 4.0.0-beta, the body parameter name in OAS v2 is automatically preserved in the vendor extension ",(0,o.kt)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")),(0,o.kt)("p",null,"In OpenAPI spec v3, there's no body parameter, which is replaced by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#request-body-object"},"Request Body Object"),'. The parameter name for Request Body is named automatically based on the model name (e.g. User). To control how the "Request Body" parameter is named, please add the vendor extension ',(0,o.kt)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")," to the operation:"),(0,o.kt)("p",null,"OpenAPI Spec v3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      description: ''\n      operationId: addPet\n      x-codegen-request-body-name: new_body_name\n      responses:\n        '405':\n          description: Invalid input\n      security:\n        - petstore_auth:\n            - 'write:pets'\n            - 'read:pets'\n      requestBody:\n        $ref: '#/components/requestBodies/Pet'\n")),(0,o.kt)("p",null,"OpenAPI Spec v2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      description: ''\n      operationId: addPet\n      x-codegen-request-body-name: new_body_name\n      consumes:\n        - application/json\n        - application/xml\n      produces:\n        - application/xml\n        - application/json\n      parameters:\n        - in: body\n          name: body\n          description: Pet object that needs to be added to the store\n          required: true\n          schema:\n            $ref: '#/definitions/Pet'\n      responses:\n        '405':\n          description: Invalid input\n      security:\n        - petstore_auth:\n            - 'write:pets'\n            - 'read:pets'\n")),(0,o.kt)("p",null,"If your API client is using named parameters in the function call (e.g. Perl required & optional parameters, Ruby optional parameters), you will need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"x-codegen-request-body-name")," to the spec to restore the original body parameter name."),(0,o.kt)("h2",{id:"default-basepath"},"Default basePath"),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"basePath")," has been changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," (http without s)"),(0,o.kt)("h2",{id:"nullable"},"Nullable"),(0,o.kt)("p",null,"OpenAPI spec v3 has better support for ",(0,o.kt)("inlineCode",{parentName:"p"},"nullable"),". If you're still using OpenAPI/Swagger spec v2, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"x-nullable: true")," instead."))}g.isMDXComponent=!0}}]);