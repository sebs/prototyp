define(["exports","../app/vaadin-app.js"],function(_exports,_vaadinApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports._composedTreeContains=_composedTreeContains;_exports._getScrollInfo=_getScrollInfo;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports.currentLockingElement=_exports._unlockedElementCache=_exports._lockingElements=_exports._lockedElementCache=_exports._boundScrollHandler=_exports.PaperRippleBehavior=_exports.PaperMenuButton=_exports.PaperItemBehaviorImpl=_exports.PaperItemBehavior=_exports.PaperInputHelper=_exports.PaperInputBehaviorImpl=_exports.PaperInputBehavior=_exports.PaperInputAddonBehavior=_exports.PaperButtonBehaviorImpl=_exports.PaperButtonBehavior=_exports.NeonAnimationRunnerBehaviorImpl=_exports.NeonAnimationRunnerBehavior=_exports.NeonAnimationBehavior=_exports.NeonAnimatableBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronValidatableBehavior=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronOverlayManagerClass=_exports.IronOverlayManager=_exports.IronOverlayBehaviorImpl=_exports.IronOverlayBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronMultiSelectableBehavior=_exports.IronMeta=_exports.IronMenuBehaviorImpl=_exports.IronMenuBehavior=_exports.IronFormElementBehavior=_exports.IronFocusablesHelper=_exports.IronFitBehavior=_exports.IronControlState=_exports.IronButtonStateImpl=_exports.IronButtonState=_exports.IronA11yKeysBehavior=_exports.IronA11yAnnouncer=_exports.$paperRippleBehavior=_exports.$paperMenuButton=_exports.$paperItemBehavior=_exports.$paperInputBehavior=_exports.$paperInputAddonBehavior=_exports.$paperButtonBehavior=_exports.$neonAnimationRunnerBehavior=_exports.$neonAnimationBehavior=_exports.$neonAnimatableBehavior=_exports.$ironValidatableBehavior=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironMultiSelectable=_exports.$ironMeta=_exports.$ironMenuBehavior=_exports.$ironFormElementBehavior=_exports.$ironFocusablesHelper=_exports.$ironFitBehavior=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$ironA11yAnnouncer=void 0;function _templateObject28_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment\"></style>\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n        }\n        vaadin-grid-filter,\n        vaadin-text-field {\n          width: 100%;\n        }\n        paper-card {\n          width: 1000px;\n          overflow: hidden;\n        }\n      </style>\n\n      <custom-style>\n        <style is=\"custom-style\">\n          .container {\n            display: inline-block;\n            margin-left: 30px;\n            margin-right: 30px;\n          }\n          /* Need to position the badge to look like a text superscript */\n          .container > paper-badge {\n            --paper-badge-margin-left: 20px;\n            --paper-badge-margin-bottom: 0px;\n          }\n        </style>\n      </custom-style>\n\n      <iron-ajax auto url=\"[[srcUrl]]\" handle-as=\"json\" last-response=\"{{_dayData}}\"></iron-ajax>\n      <div class=\"card\">\n      <h1>Inhalte</h1>\n      <div class=\"container\" tabindex=\"0\">\n        <span>Inhalte</span>\n        <paper-badge label=\"{{content.length}}\"></paper-badge>\n      </div>\n\n      <div class=\"container\" tabindex=\"1\">\n        <span>Quellen</span>\n        <paper-badge label=\"{{sources.length}}\"></paper-badge>\n      </div>\n\n      <paper-dropdown-menu label=\"Type\" on-selected-item-changed=\"_typeChanged\" value=\"{{selectedType}}\">>\n        <paper-listbox slot=\"dropdown-content\">\n          <paper-item value=\"morning\">morning</paper-item>\n          <paper-item value=\"noon\">noon</paper-item>\n          <paper-item value=\"day\">day</paper-item>\n          <paper-item value=\"today\">today</paper-item>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <br>\n      <template is=\"dom-repeat\" items=\"[[content]]\">\n        <paper-card heading=\"[[item.title]]\" alt=\"[[item.title]]\">\n          <div class=\"card-content\">[[item.content]]</div>\n          <div class=\"card-actions\">\n            <entity-button entity=\"[[item.author]]\"></entity-button>\n            <a href=\"[[item.itemUrl]]\" target=\"_blank\">\n              <paper-button>Quelle</paper-button>\n            </a>\n            <paper-button>[[item.created]]</paper-button>\n          </div>\n        </paper-card>\n        <br/><br/>\n      </template>\n    </div>\n    "]);_templateObject28_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject28_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject27_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\" include=\"paper-material-styles\">\n                paper-button.green {\n                    background-color: var(--paper-green-100);\n                }\n                paper-button.purple {\n                    background-color: var(--paper-purple-100);\n                }\n                paper-button.orange {\n                    background-color: var(--paper-orange-100);\n                }\n                paper-button.yellow {\n                    background-color: var(--paper-yellow-100);\n                }\n                paper-button.black {\n                    background-color: var(--paper-black-100);\n                }\n                paper-button.brown {\n                    background-color: var(--paper-brown-100);\n                }\n            </style>\n            <paper-button id=\"button\" class=\"[[class]]\" label=\"[[entity.shortname]]\">\n                <a href=\"[[href]]\" target=\"_blank\">[[name]]</a>\n            </paper-button>\n        "]);_templateObject27_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject27_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject26_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject26_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject26_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject25_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"paper-item-shared-styles\">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n"]);_templateObject25_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject25_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject24_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"paper-dropdown-menu-shared-styles\"></style>\n\n    <paper-menu-button id=\"menuButton\" vertical-align=\"[[verticalAlign]]\" horizontal-align=\"[[horizontalAlign]]\" dynamic-align=\"[[dynamicAlign]]\" vertical-offset=\"[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]\" disabled=\"[[disabled]]\" no-animations=\"[[noAnimations]]\" on-iron-select=\"_onIronSelect\" on-iron-deselect=\"_onIronDeselect\" opened=\"{{opened}}\" close-on-activate allow-outside-scroll=\"[[allowOutsideScroll]]\" restore-focus-on-close=\"[[restoreFocusOnClose]]\">\n      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->\n      <div class=\"dropdown-trigger\" slot=\"dropdown-trigger\">\n        <paper-ripple></paper-ripple>\n        <!-- paper-input has type=\"text\" for a11y, do not remove -->\n        <paper-input id=\"input\" type=\"text\" invalid=\"[[invalid]]\" readonly disabled=\"[[disabled]]\" value=\"[[value]]\" placeholder=\"[[placeholder]]\" error-message=\"[[errorMessage]]\" always-float-label=\"[[alwaysFloatLabel]]\" no-label-float=\"[[noLabelFloat]]\" label=\"[[label]]\" input-role=\"button\" input-aria-haspopup=\"listbox\" autocomplete=\"off\">\n          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->\n          <iron-icon icon=\"paper-dropdown-menu:arrow-drop-down\" suffix slot=\"suffix\"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id=\"content\" name=\"dropdown-content\" slot=\"dropdown-content\"></slot>\n    </paper-menu-button>\n"]);_templateObject24_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject24_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject23_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align=\"top\"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align=\"bottom\"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id=\"trigger\" on-tap=\"toggle\">\n      <slot name=\"dropdown-trigger\"></slot>\n    </div>\n\n    <iron-dropdown id=\"dropdown\" opened=\"{{opened}}\" horizontal-align=\"[[horizontalAlign]]\" vertical-align=\"[[verticalAlign]]\" dynamic-align=\"[[dynamicAlign]]\" horizontal-offset=\"[[horizontalOffset]]\" vertical-offset=\"[[verticalOffset]]\" no-overlap=\"[[noOverlap]]\" open-animation-config=\"[[openAnimationConfig]]\" close-animation-config=\"[[closeAnimationConfig]]\" no-animations=\"[[noAnimations]]\" focus-target=\"[[_dropdownContent]]\" allow-outside-scroll=\"[[allowOutsideScroll]]\" restore-focus-on-close=\"[[restoreFocusOnClose]]\" on-iron-overlay-canceled=\"__onIronOverlayCanceled\">\n      <div slot=\"dropdown-content\" class=\"dropdown-content\">\n        <slot id=\"content\" name=\"dropdown-content\"></slot>\n      </div>\n    </iron-dropdown>\n"]);_templateObject23_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject23_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject22_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input's properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id=\"container\" no-label-float=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->\n      <iron-input bind-value=\"{{value}}\" slot=\"input\" class=\"input-element\" id$=\"[[_inputId]]\" maxlength$=\"[[maxlength]]\" allowed-pattern=\"[[allowedPattern]]\" invalid=\"{{invalid}}\" validator=\"[[validator]]\">\n        <input aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" disabled$=\"[[disabled]]\" title$=\"[[title]]\" type$=\"[[type]]\" pattern$=\"[[pattern]]\" required$=\"[[required]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" min$=\"[[min]]\" max$=\"[[max]]\" step$=\"[[step]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" list$=\"[[list]]\" size$=\"[[size]]\" autocapitalize$=\"[[autocapitalize]]\" autocorrect$=\"[[autocorrect]]\" on-change=\"_onChange\" tabindex$=\"[[tabIndex]]\" autosave$=\"[[autosave]]\" results$=\"[[results]]\" accept$=\"[[accept]]\" multiple$=\"[[multiple]]\" role$=\"[[inputRole]]\" aria-haspopup$=\"[[inputAriaHaspopup]]\">\n      </iron-input>\n\n      <slot name=\"suffix\" slot=\"suffix\"></slot>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  "]);_templateObject22_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject22_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject21_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"]);_templateObject21_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject21_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject20_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n\n      .input-content ::slotted(label):before,\n      .input-content ::slotted(.paper-input-label):before {\n        @apply --paper-input-container-label-before;\n      }\n\n      .input-content ::slotted(label):after,\n      .input-content ::slotted(.paper-input-label):after {\n        @apply --paper-input-container-label-after;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn't apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class=\"floated-label-placeholder\" aria-hidden=\"true\" hidden=\"[[noLabelFloat]]\">&nbsp;</div>\n\n    <div class=\"input-wrapper\">\n      <span class=\"prefix\"><slot name=\"prefix\"></slot></span>\n\n      <div class$=\"[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]\" id=\"labelAndInputContainer\">\n        <slot name=\"label\"></slot>\n        <slot name=\"input\"></slot>\n      </div>\n\n      <span class=\"suffix\"><slot name=\"suffix\"></slot></span>\n    </div>\n\n    <div class$=\"[[_computeUnderlineClass(focused,invalid)]]\">\n      <div class=\"unfocused-line\"></div>\n      <div class=\"focused-line\"></div>\n    </div>\n\n    <div class$=\"[[_computeAddOnContentClass(focused,invalid)]]\">\n      <slot name=\"add-on\"></slot>\n    </div>\n"]);_templateObject20_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject20_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject19_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n"]);_templateObject19_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject19_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject18_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"]);_templateObject18_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject18_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject17_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"paper-material-styles\">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class=\"header\">\n      <iron-image hidden$=\"[[!image]]\" aria-hidden$=\"[[_isHidden(image)]]\" src=\"[[image]]\" alt=\"[[alt]]\" placeholder=\"[[placeholderImage]]\" preload=\"[[preloadImage]]\" fade=\"[[fadeImage]]\"></iron-image>\n      <div hidden$=\"[[!heading]]\" class$=\"title-text [[_computeHeadingClass(image)]]\">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n"],["\n    <style include=\"paper-material-styles\">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class=\"header\">\n      <iron-image hidden\\$=\"[[!image]]\" aria-hidden\\$=\"[[_isHidden(image)]]\" src=\"[[image]]\" alt=\"[[alt]]\" placeholder=\"[[placeholderImage]]\" preload=\"[[preloadImage]]\" fade=\"[[fadeImage]]\"></iron-image>\n      <div hidden\\$=\"[[!heading]]\" class\\$=\"title-text [[_computeHeadingClass(image)]]\">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n"]);_templateObject17_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject17_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject16_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    /* Need to specify the same specificity as the styles imported from paper-material. */\n    :host {\n      @apply --layout-inline;\n      @apply --layout-center-center;\n      position: relative;\n      box-sizing: border-box;\n      min-width: 5.14em;\n      margin: 0 0.29em;\n      background: transparent;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-tap-highlight-color: transparent;\n      font: inherit;\n      text-transform: uppercase;\n      outline-width: 0;\n      border-radius: 3px;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      z-index: 0;\n      padding: 0.7em 0.57em;\n\n      @apply --paper-font-common-base;\n      @apply --paper-button;\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    :host([raised].keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-raised-keyboard-focus;\n    }\n\n    :host(:not([raised]).keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-flat-keyboard-focus;\n    }\n\n    :host([disabled]) {\n      background: none;\n      color: #a8a8a8;\n      cursor: auto;\n      pointer-events: none;\n\n      @apply --paper-button-disabled;\n    }\n\n    :host([disabled][raised]) {\n      background: #eaeaea;\n    }\n\n\n    :host([animated]) {\n      @apply --shadow-transition;\n    }\n\n    paper-ripple {\n      color: var(--paper-button-ink-color);\n    }\n  </style>\n\n  <slot></slot>"]);_templateObject16_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject16_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject15_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject15_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject15_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject14_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --shadow-transition: {\n        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      };\n\n      --shadow-none: {\n        box-shadow: none;\n      };\n\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n\n      --shadow-elevation-2dp: {\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      };\n\n      --shadow-elevation-3dp: {\n        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 8px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-4dp: {\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 10px 0 rgba(0, 0, 0, 0.12),\n                    0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-6dp: {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 18px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-8dp: {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n                    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-12dp: {\n        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n                    0 4px 22px 3px rgba(0, 0, 0, 0.12),\n                    0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-16dp: {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),\n                    0  6px 30px 5px rgba(0, 0, 0, 0.12),\n                    0  8px 10px -5px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-24dp: {\n        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0 9px 46px 8px rgba(0, 0, 0, 0.12),\n                    0 11px 15px -7px rgba(0, 0, 0, 0.4);\n      };\n    }\n  </style>\n</custom-style>"]);_templateObject14_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject14_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject13_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject13_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject13_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject12_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      iron-icon {\n        --iron-icon-width: var(--paper-badge-icon-width, 12px);\n        --iron-icon-height: var(--paper-badge-icon-height, 12px);\n      }\n\n      .badge {\n        @apply --layout;\n        @apply --layout-center-center;\n        @apply --paper-font-common-base;\n\n        font-weight: normal;\n        font-size: 11px;\n        border-radius: 50%;\n        margin-left: var(--paper-badge-margin-left, 0px);\n        margin-bottom: var(--paper-badge-margin-bottom, 0px);\n        width: var(--paper-badge-width, 20px);\n        height: var(--paper-badge-height, 20px);\n        background-color: var(--paper-badge-background, var(--accent-color));\n        opacity: var(--paper-badge-opacity, 1.0);\n        color: var(--paper-badge-text-color, white);\n\n        @apply --paper-badge;\n      }\n    </style>\n\n    <div class=\"badge\">\n      <iron-icon hidden$=\"{{!_computeIsIconBadge(icon)}}\" icon=\"{{icon}}\"></iron-icon>\n      <span id=\"badge-text\" hidden$=\"{{_computeIsIconBadge(icon)}}\">{{label}}</span>\n    </div>\n  "],["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      iron-icon {\n        --iron-icon-width: var(--paper-badge-icon-width, 12px);\n        --iron-icon-height: var(--paper-badge-icon-height, 12px);\n      }\n\n      .badge {\n        @apply --layout;\n        @apply --layout-center-center;\n        @apply --paper-font-common-base;\n\n        font-weight: normal;\n        font-size: 11px;\n        border-radius: 50%;\n        margin-left: var(--paper-badge-margin-left, 0px);\n        margin-bottom: var(--paper-badge-margin-bottom, 0px);\n        width: var(--paper-badge-width, 20px);\n        height: var(--paper-badge-height, 20px);\n        background-color: var(--paper-badge-background, var(--accent-color));\n        opacity: var(--paper-badge-opacity, 1.0);\n        color: var(--paper-badge-text-color, white);\n\n        @apply --paper-badge;\n      }\n    </style>\n\n    <div class=\"badge\">\n      <iron-icon hidden\\$=\"{{!_computeIsIconBadge(icon)}}\" icon=\"{{icon}}\"></iron-icon>\n      <span id=\"badge-text\" hidden\\$=\"{{_computeIsIconBadge(icon)}}\">{{label}}</span>\n    </div>\n  "]);_templateObject12_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject12_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject11_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>"]);_templateObject11_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject11_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject10_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"],["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"]);_templateObject10_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject10_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject9_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Material Design color palette for Google products */\n\n      --google-red-100: #f4c7c3;\n      --google-red-300: #e67c73;\n      --google-red-500: #db4437;\n      --google-red-700: #c53929;\n\n      --google-blue-100: #c6dafc;\n      --google-blue-300: #7baaf7;\n      --google-blue-500: #4285f4;\n      --google-blue-700: #3367d6;\n\n      --google-green-100: #b7e1cd;\n      --google-green-300: #57bb8a;\n      --google-green-500: #0f9d58;\n      --google-green-700: #0b8043;\n\n      --google-yellow-100: #fce8b2;\n      --google-yellow-300: #f7cb4d;\n      --google-yellow-500: #f4b400;\n      --google-yellow-700: #f09300;\n\n      --google-grey-100: #f5f5f5;\n      --google-grey-300: #e0e0e0;\n      --google-grey-500: #9e9e9e;\n      --google-grey-700: #616161;\n\n      /* Material Design color palette from online spec document */\n\n      --paper-red-50: #ffebee;\n      --paper-red-100: #ffcdd2;\n      --paper-red-200: #ef9a9a;\n      --paper-red-300: #e57373;\n      --paper-red-400: #ef5350;\n      --paper-red-500: #f44336;\n      --paper-red-600: #e53935;\n      --paper-red-700: #d32f2f;\n      --paper-red-800: #c62828;\n      --paper-red-900: #b71c1c;\n      --paper-red-a100: #ff8a80;\n      --paper-red-a200: #ff5252;\n      --paper-red-a400: #ff1744;\n      --paper-red-a700: #d50000;\n\n      --paper-pink-50: #fce4ec;\n      --paper-pink-100: #f8bbd0;\n      --paper-pink-200: #f48fb1;\n      --paper-pink-300: #f06292;\n      --paper-pink-400: #ec407a;\n      --paper-pink-500: #e91e63;\n      --paper-pink-600: #d81b60;\n      --paper-pink-700: #c2185b;\n      --paper-pink-800: #ad1457;\n      --paper-pink-900: #880e4f;\n      --paper-pink-a100: #ff80ab;\n      --paper-pink-a200: #ff4081;\n      --paper-pink-a400: #f50057;\n      --paper-pink-a700: #c51162;\n\n      --paper-purple-50: #f3e5f5;\n      --paper-purple-100: #e1bee7;\n      --paper-purple-200: #ce93d8;\n      --paper-purple-300: #ba68c8;\n      --paper-purple-400: #ab47bc;\n      --paper-purple-500: #9c27b0;\n      --paper-purple-600: #8e24aa;\n      --paper-purple-700: #7b1fa2;\n      --paper-purple-800: #6a1b9a;\n      --paper-purple-900: #4a148c;\n      --paper-purple-a100: #ea80fc;\n      --paper-purple-a200: #e040fb;\n      --paper-purple-a400: #d500f9;\n      --paper-purple-a700: #aa00ff;\n\n      --paper-deep-purple-50: #ede7f6;\n      --paper-deep-purple-100: #d1c4e9;\n      --paper-deep-purple-200: #b39ddb;\n      --paper-deep-purple-300: #9575cd;\n      --paper-deep-purple-400: #7e57c2;\n      --paper-deep-purple-500: #673ab7;\n      --paper-deep-purple-600: #5e35b1;\n      --paper-deep-purple-700: #512da8;\n      --paper-deep-purple-800: #4527a0;\n      --paper-deep-purple-900: #311b92;\n      --paper-deep-purple-a100: #b388ff;\n      --paper-deep-purple-a200: #7c4dff;\n      --paper-deep-purple-a400: #651fff;\n      --paper-deep-purple-a700: #6200ea;\n\n      --paper-indigo-50: #e8eaf6;\n      --paper-indigo-100: #c5cae9;\n      --paper-indigo-200: #9fa8da;\n      --paper-indigo-300: #7986cb;\n      --paper-indigo-400: #5c6bc0;\n      --paper-indigo-500: #3f51b5;\n      --paper-indigo-600: #3949ab;\n      --paper-indigo-700: #303f9f;\n      --paper-indigo-800: #283593;\n      --paper-indigo-900: #1a237e;\n      --paper-indigo-a100: #8c9eff;\n      --paper-indigo-a200: #536dfe;\n      --paper-indigo-a400: #3d5afe;\n      --paper-indigo-a700: #304ffe;\n\n      --paper-blue-50: #e3f2fd;\n      --paper-blue-100: #bbdefb;\n      --paper-blue-200: #90caf9;\n      --paper-blue-300: #64b5f6;\n      --paper-blue-400: #42a5f5;\n      --paper-blue-500: #2196f3;\n      --paper-blue-600: #1e88e5;\n      --paper-blue-700: #1976d2;\n      --paper-blue-800: #1565c0;\n      --paper-blue-900: #0d47a1;\n      --paper-blue-a100: #82b1ff;\n      --paper-blue-a200: #448aff;\n      --paper-blue-a400: #2979ff;\n      --paper-blue-a700: #2962ff;\n\n      --paper-light-blue-50: #e1f5fe;\n      --paper-light-blue-100: #b3e5fc;\n      --paper-light-blue-200: #81d4fa;\n      --paper-light-blue-300: #4fc3f7;\n      --paper-light-blue-400: #29b6f6;\n      --paper-light-blue-500: #03a9f4;\n      --paper-light-blue-600: #039be5;\n      --paper-light-blue-700: #0288d1;\n      --paper-light-blue-800: #0277bd;\n      --paper-light-blue-900: #01579b;\n      --paper-light-blue-a100: #80d8ff;\n      --paper-light-blue-a200: #40c4ff;\n      --paper-light-blue-a400: #00b0ff;\n      --paper-light-blue-a700: #0091ea;\n\n      --paper-cyan-50: #e0f7fa;\n      --paper-cyan-100: #b2ebf2;\n      --paper-cyan-200: #80deea;\n      --paper-cyan-300: #4dd0e1;\n      --paper-cyan-400: #26c6da;\n      --paper-cyan-500: #00bcd4;\n      --paper-cyan-600: #00acc1;\n      --paper-cyan-700: #0097a7;\n      --paper-cyan-800: #00838f;\n      --paper-cyan-900: #006064;\n      --paper-cyan-a100: #84ffff;\n      --paper-cyan-a200: #18ffff;\n      --paper-cyan-a400: #00e5ff;\n      --paper-cyan-a700: #00b8d4;\n\n      --paper-teal-50: #e0f2f1;\n      --paper-teal-100: #b2dfdb;\n      --paper-teal-200: #80cbc4;\n      --paper-teal-300: #4db6ac;\n      --paper-teal-400: #26a69a;\n      --paper-teal-500: #009688;\n      --paper-teal-600: #00897b;\n      --paper-teal-700: #00796b;\n      --paper-teal-800: #00695c;\n      --paper-teal-900: #004d40;\n      --paper-teal-a100: #a7ffeb;\n      --paper-teal-a200: #64ffda;\n      --paper-teal-a400: #1de9b6;\n      --paper-teal-a700: #00bfa5;\n\n      --paper-green-50: #e8f5e9;\n      --paper-green-100: #c8e6c9;\n      --paper-green-200: #a5d6a7;\n      --paper-green-300: #81c784;\n      --paper-green-400: #66bb6a;\n      --paper-green-500: #4caf50;\n      --paper-green-600: #43a047;\n      --paper-green-700: #388e3c;\n      --paper-green-800: #2e7d32;\n      --paper-green-900: #1b5e20;\n      --paper-green-a100: #b9f6ca;\n      --paper-green-a200: #69f0ae;\n      --paper-green-a400: #00e676;\n      --paper-green-a700: #00c853;\n\n      --paper-light-green-50: #f1f8e9;\n      --paper-light-green-100: #dcedc8;\n      --paper-light-green-200: #c5e1a5;\n      --paper-light-green-300: #aed581;\n      --paper-light-green-400: #9ccc65;\n      --paper-light-green-500: #8bc34a;\n      --paper-light-green-600: #7cb342;\n      --paper-light-green-700: #689f38;\n      --paper-light-green-800: #558b2f;\n      --paper-light-green-900: #33691e;\n      --paper-light-green-a100: #ccff90;\n      --paper-light-green-a200: #b2ff59;\n      --paper-light-green-a400: #76ff03;\n      --paper-light-green-a700: #64dd17;\n\n      --paper-lime-50: #f9fbe7;\n      --paper-lime-100: #f0f4c3;\n      --paper-lime-200: #e6ee9c;\n      --paper-lime-300: #dce775;\n      --paper-lime-400: #d4e157;\n      --paper-lime-500: #cddc39;\n      --paper-lime-600: #c0ca33;\n      --paper-lime-700: #afb42b;\n      --paper-lime-800: #9e9d24;\n      --paper-lime-900: #827717;\n      --paper-lime-a100: #f4ff81;\n      --paper-lime-a200: #eeff41;\n      --paper-lime-a400: #c6ff00;\n      --paper-lime-a700: #aeea00;\n\n      --paper-yellow-50: #fffde7;\n      --paper-yellow-100: #fff9c4;\n      --paper-yellow-200: #fff59d;\n      --paper-yellow-300: #fff176;\n      --paper-yellow-400: #ffee58;\n      --paper-yellow-500: #ffeb3b;\n      --paper-yellow-600: #fdd835;\n      --paper-yellow-700: #fbc02d;\n      --paper-yellow-800: #f9a825;\n      --paper-yellow-900: #f57f17;\n      --paper-yellow-a100: #ffff8d;\n      --paper-yellow-a200: #ffff00;\n      --paper-yellow-a400: #ffea00;\n      --paper-yellow-a700: #ffd600;\n\n      --paper-amber-50: #fff8e1;\n      --paper-amber-100: #ffecb3;\n      --paper-amber-200: #ffe082;\n      --paper-amber-300: #ffd54f;\n      --paper-amber-400: #ffca28;\n      --paper-amber-500: #ffc107;\n      --paper-amber-600: #ffb300;\n      --paper-amber-700: #ffa000;\n      --paper-amber-800: #ff8f00;\n      --paper-amber-900: #ff6f00;\n      --paper-amber-a100: #ffe57f;\n      --paper-amber-a200: #ffd740;\n      --paper-amber-a400: #ffc400;\n      --paper-amber-a700: #ffab00;\n\n      --paper-orange-50: #fff3e0;\n      --paper-orange-100: #ffe0b2;\n      --paper-orange-200: #ffcc80;\n      --paper-orange-300: #ffb74d;\n      --paper-orange-400: #ffa726;\n      --paper-orange-500: #ff9800;\n      --paper-orange-600: #fb8c00;\n      --paper-orange-700: #f57c00;\n      --paper-orange-800: #ef6c00;\n      --paper-orange-900: #e65100;\n      --paper-orange-a100: #ffd180;\n      --paper-orange-a200: #ffab40;\n      --paper-orange-a400: #ff9100;\n      --paper-orange-a700: #ff6500;\n\n      --paper-deep-orange-50: #fbe9e7;\n      --paper-deep-orange-100: #ffccbc;\n      --paper-deep-orange-200: #ffab91;\n      --paper-deep-orange-300: #ff8a65;\n      --paper-deep-orange-400: #ff7043;\n      --paper-deep-orange-500: #ff5722;\n      --paper-deep-orange-600: #f4511e;\n      --paper-deep-orange-700: #e64a19;\n      --paper-deep-orange-800: #d84315;\n      --paper-deep-orange-900: #bf360c;\n      --paper-deep-orange-a100: #ff9e80;\n      --paper-deep-orange-a200: #ff6e40;\n      --paper-deep-orange-a400: #ff3d00;\n      --paper-deep-orange-a700: #dd2c00;\n\n      --paper-brown-50: #efebe9;\n      --paper-brown-100: #d7ccc8;\n      --paper-brown-200: #bcaaa4;\n      --paper-brown-300: #a1887f;\n      --paper-brown-400: #8d6e63;\n      --paper-brown-500: #795548;\n      --paper-brown-600: #6d4c41;\n      --paper-brown-700: #5d4037;\n      --paper-brown-800: #4e342e;\n      --paper-brown-900: #3e2723;\n\n      --paper-grey-50: #fafafa;\n      --paper-grey-100: #f5f5f5;\n      --paper-grey-200: #eeeeee;\n      --paper-grey-300: #e0e0e0;\n      --paper-grey-400: #bdbdbd;\n      --paper-grey-500: #9e9e9e;\n      --paper-grey-600: #757575;\n      --paper-grey-700: #616161;\n      --paper-grey-800: #424242;\n      --paper-grey-900: #212121;\n\n      --paper-blue-grey-50: #eceff1;\n      --paper-blue-grey-100: #cfd8dc;\n      --paper-blue-grey-200: #b0bec5;\n      --paper-blue-grey-300: #90a4ae;\n      --paper-blue-grey-400: #78909c;\n      --paper-blue-grey-500: #607d8b;\n      --paper-blue-grey-600: #546e7a;\n      --paper-blue-grey-700: #455a64;\n      --paper-blue-grey-800: #37474f;\n      --paper-blue-grey-900: #263238;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n    }\n\n  </style>\n</custom-style>\n"]);_templateObject9_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject9_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject8_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id=\"content\"></slot>\n"]);_templateObject8_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject8_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject7_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id=\"baseURIAnchor\" href=\"#\"></a>\n    <div id=\"sizedImgDiv\" role=\"img\" hidden$=\"[[_computeImgDivHidden(sizing)]]\" aria-hidden$=\"[[_computeImgDivARIAHidden(alt)]]\" aria-label$=\"[[_computeImgDivARIALabel(alt, src)]]\"></div>\n    <img id=\"img\" alt$=\"[[alt]]\" hidden$=\"[[_computeImgHidden(sizing)]]\" crossorigin$=\"[[crossorigin]]\" on-load=\"_imgOnLoad\" on-error=\"_imgOnError\">\n    <div id=\"placeholder\" hidden$=\"[[_computePlaceholderHidden(preload, fade, loading, loaded)]]\" class$=\"[[_computePlaceholderClassName(preload, fade, loading, loaded)]]\"></div>\n"]);_templateObject7_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject7_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject6_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);_templateObject6_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject6_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject5_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>"]);_templateObject5_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject5_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject4_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n/* Most common used flex styles*/\n<dom-module id=\"iron-flex\">\n  <template>\n    <style>\n      .layout.horizontal,\n      .layout.vertical {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.inline {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      }\n\n      .layout.horizontal {\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .layout.vertical {\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      .layout.wrap {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n\n      .layout.no-wrap {\n        -ms-flex-wrap: nowrap;\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .flex {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-auto {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      }\n\n      .flex-none {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Basic flexbox reverse styles */\n<dom-module id=\"iron-flex-reverse\">\n  <template>\n    <style>\n      .layout.horizontal-reverse,\n      .layout.vertical-reverse {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.horizontal-reverse {\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      }\n\n      .layout.vertical-reverse {\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      }\n\n      .layout.wrap-reverse {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Flexbox alignment */\n<dom-module id=\"iron-flex-alignment\">\n  <template>\n    <style>\n      /**\n       * Alignment in cross axis.\n       */\n      .layout.start {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.end {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      }\n\n      .layout.baseline {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      }\n\n      /**\n       * Alignment in main axis.\n       */\n      .layout.start-justified {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .layout.end-justified {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      }\n\n      .layout.around-justified {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      }\n\n      .layout.justified {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n\n      /**\n       * Self alignment.\n       */\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-center {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n\n      .self-stretch {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      }\n\n      .self-baseline {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      }\n\n      /**\n       * multi-line alignment in main axis.\n       */\n      .layout.start-aligned {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      }\n\n      .layout.end-aligned {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      }\n\n      .layout.center-aligned {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      }\n\n      .layout.between-aligned {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      }\n\n      .layout.around-aligned {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Non-flexbox positioning helper styles */\n<dom-module id=\"iron-flex-factors\">\n  <template>\n    <style>\n      .flex,\n      .flex-1 {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-2 {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      }\n\n      .flex-3 {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      }\n\n      .flex-4 {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      }\n\n      .flex-5 {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      }\n\n      .flex-6 {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      }\n\n      .flex-7 {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      }\n\n      .flex-8 {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      }\n\n      .flex-9 {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      }\n\n      .flex-10 {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      }\n\n      .flex-11 {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      }\n\n      .flex-12 {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id=\"iron-positioning\">\n  <template>\n    <style>\n      .block {\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .invisible {\n        visibility: hidden !important;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      body.fullbleed {\n        margin: 0;\n        height: 100vh;\n      }\n\n      .scroll {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      }\n\n      /* fixed position */\n      .fixed-bottom,\n      .fixed-left,\n      .fixed-right,\n      .fixed-top {\n        position: fixed;\n      }\n\n      .fixed-top {\n        top: 0;\n        left: 0;\n        right: 0;\n      }\n\n      .fixed-right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      .fixed-bottom {\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .fixed-left {\n        top: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>\n"]);_templateObject4_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject4_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject3_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id=\"contentWrapper\">\n      <slot id=\"content\" name=\"dropdown-content\"></slot>\n    </div>\n"]);_templateObject3_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject3_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject2_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject2_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject2_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}function _templateObject_f4bde900d04c11ea9be8ed19ce1a2128(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$=\"[[mode]]\">[[_text]]</div>\n"]);_templateObject_f4bde900d04c11ea9be8ed19ce1a2128=function _templateObject_f4bde900d04c11ea9be8ed19ce1a2128(){return data};return data}// Give the user the choice to opt out of font loading.
if(!window.polymerSkipLoadingFontRoboto){var link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.crossOrigin="anonymous";link.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic";document.head.appendChild(link)}var IronA11yAnnouncer=(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-a11y-announcer",properties:{/**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */mode:{type:String,value:"polite"},/**
     * The timeout on refreshing the announcement text. Larger timeouts are
     * needed for certain screen readers to re-announce the same message.
     */timeout:{type:Number,value:150},_text:{type:String,value:""}},/** @override */created:function created(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},/**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */announce:function announce(text){this._text="";this.async(function(){this._text=text},this.timeout)},_onIronAnnounce:function _onIronAnnounce(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}if(document.body){document.body.appendChild(IronA11yAnnouncer.instance)}else{document.addEventListener("load",function(){document.body.appendChild(IronA11yAnnouncer.instance)})}};var ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};_exports.$ironA11yAnnouncer=ironA11yAnnouncer;var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;/**
    * Special table for KeyboardEvent.keyCode.
    * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
    * than that.
    *
    * Values from:
    * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
    */ /**
                           * Transforms the key.
                           * @param {string} key The KeyBoardEvent.key
                           * @param {Boolean} [noSpecialChars] Limits the transformation to
                           * alpha-numeric characters.
                           */function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){// numpad '*' can map to Multiply on IE/Windows
validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){// function keys f1-f12
validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){// top 0-9 keys
validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){// num pad 0-9
validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}/**
   * Calculates the normalized key for a KeyboardEvent.
   * @param {KeyboardEvent} keyEvent
   * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
   * transformation to alpha-numeric chars. This is useful with key
   * combinations like shift + 2, which on FF for MacOS produces
   * keyEvent.key = @
   * To get 2 returned, set noSpecialChars = true
   * To get @ returned, set noSpecialChars = false
   */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}/**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best
   * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
   * element takes care of browser differences with respect to Keyboard events and
   * uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information
   * in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source
   * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronA11yKeysBehavior={properties:{/**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */keyEventTarget:{type:Object,value:function value(){return this}},/**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function value(){return[]}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function value(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],/**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */keyBindings:{},registered:function registered(){this._prepKeyBindings()},attached:function attached(){this._listenKeyEventListeners()},detached:function detached(){this._unlistenKeyEventListeners()},/**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */addOwnKeyBinding:function addOwnKeyBinding(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * When called, will remove all imperatively-added key bindings.
   */removeOwnKeyBindings:function removeOwnKeyBindings(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */keyboardEventMatchesKeys:function keyboardEventMatchesKeys(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function _collectKeyBindings(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function _prepKeyBindings(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function _addKeyBinding(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function _resetKeyEventListeners(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function _listenKeyEventListeners(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function _unlistenKeyEventListeners(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function _onKeyBindingEvent(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return}}}},_triggerKeyHandler:function _triggerKeyHandler(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;var IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],/**
   * @return {void}
   */ready:function ready(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused("focus"===event.type);return},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;var IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:!0,value:!1},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function _downHandler(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function _upHandler(){this._setPointerDown(!1);this._setPressed(!1)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_vaadinApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_vaadinApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click()},1)},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */_exports.IronButtonStateImpl=IronButtonStateImpl;var IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;var IronFitBehavior={properties:{/**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */sizingTarget:{type:Object,value:function value(){return this}},/**
     * The element to fit `this` into.
     */fitInto:{type:Object,value:window},/**
     * Will position the element around the positionTarget without overlapping
     * it.
     */noOverlap:{type:Boolean},/**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */positionTarget:{type:Element},/**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */horizontalAlign:{type:String},/**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */verticalAlign:{type:String},/**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */dynamicAlign:{type:Boolean},/**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */horizontalOffset:{type:Number,value:0,notify:!0},/**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */verticalOffset:{type:Number,value:0,notify:!0},/**
     * Set to true to auto-fit on attach.
     */autoFitOnAttach:{type:Boolean,value:!1},/** @type {?Object} */_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},/**
   * The element that should be used to position the element,
   * if no position target is configured.
   */get _defaultPositionTarget(){var parent=(0,_vaadinApp.dom)(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},/**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */get _localeHorizontalAlign(){if(this._isRTL){// In RTL, "left" becomes "right".
if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},/**
   * True if the element should be positioned instead of centered.
   * @private
   */get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},/**
   * True if the component is RTL.
   * @private
   */get _isRTL(){// Memoize this to avoid expensive calculations & relayouts.
// Make sure we do it only once
if("undefined"===typeof this._memoizedIsRTL){this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction}return this._memoizedIsRTL},/** @override */attached:function attached(){this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{// NOTE: shadydom applies distribution asynchronously
// for performance reasons webcomponents/shadydom#120
// Flush to get correct layout info.
window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},/** @override */detached:function detached(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},/**
   * Positions and fits the element into the `fitInto` element.
   */fit:function fit(){this.position();this.constrain();this.center()},/**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */_discoverInfo:function _discoverInfo(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},/**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */resetFit:function resetFit(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},/**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */refit:function refit(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},/**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */position:function position(){if(!this.__shouldPosition){// needs to be centered, and it is done after constrain.
return}this._discoverInfo();this.style.position="fixed";// Need border-box for margin/padding.
this.sizingTarget.style.boxSizing="border-box";// Set to 0, 0 in order to discover any offset caused by parent stacking
// contexts.
this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=Math.min(fitRect.right-margin.right,left+rect.width),bottom=Math.min(fitRect.bottom-margin.bottom,top+rect.height);// Keep left/top within fitInto respecting the margin.
left=Math.max(fitRect.left+margin.left,Math.min(left,right-this._fitInfo.sizedBy.minWidth));top=Math.max(fitRect.top+margin.top,Math.min(top,bottom-this._fitInfo.sizedBy.minHeight));// Use right/bottom to set maxWidth/maxHeight, and respect
// minWidth/minHeight.
this.sizingTarget.style.maxWidth=Math.max(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=Math.max(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";// Remove the offset caused by any stacking context.
this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},/**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */constrain:function constrain(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;// position at (0px, 0px) if not already positioned, so we can measure the
// natural size.
if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}// need border-box for margin/padding
this.sizingTarget.style.boxSizing="border-box";// constrain the width and height if not already set
var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},/**
   * @protected
   * @deprecated
   */_sizeDimension:function _sizeDimension(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},/**
   * @private
   */__sizeDimension:function __sizeDimension(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},/**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */center:function center(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){// Already positioned.
return}// Need position:fixed to center
this.style.position="fixed";// Take into account the offset caused by parents that create stacking
// contexts (e.g. with transform: translate3d). Translate to 0,0 and
// measure the bounding rect.
if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}// It will take in consideration margins and transforms
var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function __getNormalizedRect(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function __getOffscreenArea(position,size,fitRect){var verticalCrop=Math.min(0,position.top)+Math.min(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=Math.min(0,position.left)+Math.min(0,fitRect.right-(position.left+size.width));return Math.abs(verticalCrop)*size.width+Math.abs(horizontalCrop)*size.height},__getPosition:function __getPosition(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){// All the possible configurations.
// Ordered as top-left, top-right, bottom-left, bottom-right.
var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){// Duplicate.
for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}// Horizontal overlap only.
positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;// Vertical overlap only.
positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}// Consider auto as null for coding convenience.
vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;// If both vAlign and hAlign are defined, return exact match.
// For dynamicAlign and noOverlap we'll have more than one candidate, so
// we'll have to check the offscreenArea to make the best choice.
if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}// Align is ok if alignment preferences are respected. If no preferences,
// it is considered ok.
var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);// Filter out elements that don't match the alignment (if defined).
// With dynamicAlign, we need to consider all the positions to find the
// one that minimizes the cropped area.
if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);// If not cropped and respects the align requirements, keep it.
// This allows to prefer positions overlapping horizontally over the
// ones overlapping vertically.
if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;// Check which crops less. If it crops equally, check if at least one
// align setting is ok.
if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;var p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,IronFocusablesHelperClass=/*#__PURE__*/function(){function IronFocusablesHelperClass(){babelHelpers.classCallCheck(this,IronFocusablesHelperClass)}babelHelpers.createClass(IronFocusablesHelperClass,[{key:"getTabbableNodes",/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */value:function getTabbableNodes(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result}/**
     * Returns if a element is focusable.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isFocusable",value:function isFocusable(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")}/**
     * Returns if a element is tabbable. To be tabbable, a element must be
     * focusable, visible, and with a tabindex !== -1.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isTabbable",value:function isTabbable(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)}/**
     * Returns the normalized element tabindex. If not focusable, returns -1.
     * It checks for the attribute "tabindex" instead of the element property
     * `tabIndex` since browsers assign different values to it.
     * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
     * @param {!HTMLElement} element
     * @return {!number}
     * @private
     */},{key:"_normalizedTabIndex",value:function _normalizedTabIndex(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1}/**
     * Searches for nodes that are tabbable and adds them to the `result` array.
     * Returns if the `result` array needs to be sorted by tabindex.
     * @param {!Node} node The starting point for the search; added to `result`
     * if tabbable.
     * @param {!Array<!HTMLElement>} result
     * @return {boolean}
     * @private
     */},{key:"_collectTabbableNodes",value:function _collectTabbableNodes(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE){return!1}var element=/** @type {!HTMLElement} */node;if(!this._isVisible(element)){return!1}var tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distrubution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distrubution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
// TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
var children;if("content"===element.localName||"slot"===element.localName){children=(0,_vaadinApp.dom)(element).getDistributedNodes()}else{// Use shadow root if possible, will check for distributed nodes.
children=(0,_vaadinApp.dom)(element.root||element).children}for(var i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort}/**
     * Returns false if the element has `visibility: hidden` or `display: none`
     * @param {!HTMLElement} element
     * @return {boolean}
     * @private
     */},{key:"_isVisible",value:function _isVisible(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1}/**
     * Sorts an array of tabbable elements by tabindex. Returns a new array.
     * @param {!Array<!HTMLElement>} tabbables
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_sortByTabIndex",value:function _sortByTabIndex(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var len=tabbables.length;if(2>len){return tabbables}var pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)}/**
     * Merge sort iterator, merges the two arrays into one, sorted by tab index.
     * @param {!Array<!HTMLElement>} left
     * @param {!Array<!HTMLElement>} right
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_mergeSortByTabIndex",value:function _mergeSortByTabIndex(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)}/**
     * Returns if element `a` has lower tab order compared to element `b`
     * (both elements are assumed to be focusable and tabbable).
     * Elements with tabindex = 0 have lower tab order compared to elements
     * with tabindex > 0.
     * If both have same tabindex, it returns false.
     * @param {!HTMLElement} a
     * @param {!HTMLElement} b
     * @return {boolean}
     * @private
     */},{key:"_hasLowerTabOrder",value:function _hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
var ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}}]);return IronFocusablesHelperClass}(),IronFocusablesHelper=new IronFocusablesHelperClass;_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject2_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-overlay-backdrop",properties:{/**
     * Returns true if the backdrop is opened.
     */opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},/** @override */created:function created(){// Used to cancel previous requestAnimationFrame calls when opened changes.
this.__openedRaf=null},/** @override */attached:function attached(){this.opened&&this._openedChanged(this.opened)},/**
   * Appends the backdrop to document body if needed.
   */prepare:function prepare(){if(this.opened&&!this.parentNode){(0,_vaadinApp.dom)(document.body).appendChild(this)}},/**
   * Shows the backdrop.
   */open:function open(){this.opened=!0},/**
   * Hides the backdrop.
   */close:function close(){this.opened=!1},/**
   * Removes the backdrop from document body if needed.
   */complete:function complete(){if(!this.opened&&this.parentNode===document.body){(0,_vaadinApp.dom)(this.parentNode).removeChild(this)}},_onTransitionend:function _onTransitionend(event){if(event&&event.target===this){this.complete()}},/**
   * @param {boolean} opened
   * @private
   */_openedChanged:function _openedChanged(opened){if(opened){// Auto-attach.
this.prepare()}else{// Animation might be disabled via the mixin or opacity custom property.
// If it is disabled in other ways, it's up to the user to call complete.
var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}// Always cancel previous requestAnimationFrame.
if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}// Force relayout to ensure proper transitions.
this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});var IronOverlayManagerClass=/*#__PURE__*/function(){function IronOverlayManagerClass(){babelHelpers.classCallCheck(this,IronOverlayManagerClass);/**
     * Used to keep track of the opened overlays.
     * @private {!Array<!Element>}
     */this._overlays=[];/**
                             * iframes have a default z-index of 100,
                             * so this default should be at least that.
                             * @private {number}
                             */this._minimumZ=101;/**
                           * Memoized backdrop element.
                           * @private {Element|null}
                           */this._backdropElement=null;// Enable document-wide tap recognizer.
// NOTE: Use useCapture=true to avoid accidentally prevention of the closing
// of an overlay via event.stopPropagation(). The only way to prevent
// closing of an overlay should be through its APIs.
// NOTE: enable tap on <html> to workaround Polymer/polymer#4459
// Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
// https://github.com/Microsoft/ChakraCore/issues/3863
(0,_vaadinApp.addListener)(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}/**
     * The shared backdrop element.
     * @return {!Element} backdropElement
     */babelHelpers.createClass(IronOverlayManagerClass,[{key:"_bringOverlayAtIndexToFront",/**
     * Brings the overlay at the specified index to the front.
     * @param {number} i
     * @private
     */value:function _bringOverlayAtIndexToFront(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}// If already the top element, return.
if(i>=lastI){return}// Update z-index to be on top.
var minimumZ=Math.max(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}// Shift other overlays behind the new on top.
while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay}/**
     * Adds the overlay and updates its z-index if it's opened, or removes it if
     * it's closed. Also updates the backdrop z-index.
     * @param {!Element} overlay
     */},{key:"addOrRemoveOverlay",value:function addOrRemoveOverlay(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}}/**
     * Tracks overlays for z-index and focus management.
     * Ensures the last added overlay with always-on-top remains on top.
     * @param {!Element} overlay
     */},{key:"addOverlay",value:function addOverlay(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=Math.max(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){// This bumps the z-index of +2.
this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;// Update minimumZ to match previous overlay's z-index.
var previousOverlay=this._overlays[insertionIndex-1];minimumZ=Math.max(this._getZ(previousOverlay),this._minimumZ)}// Update z-index and insert overlay.
if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()}/**
     * @param {!Element} overlay
     */},{key:"removeOverlay",value:function removeOverlay(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()}/**
     * Returns the current overlay.
     * @return {!Element|undefined}
     */},{key:"currentOverlay",value:function currentOverlay(){var i=this._overlays.length-1;return this._overlays[i]}/**
     * Returns the current overlay z-index.
     * @return {number}
     */},{key:"currentOverlayZ",value:function currentOverlayZ(){return this._getZ(this.currentOverlay())}/**
     * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
     * This does not effect the z-index of any existing overlays.
     * @param {number} minimumZ
     */},{key:"ensureMinimumZ",value:function ensureMinimumZ(minimumZ){this._minimumZ=Math.max(this._minimumZ,minimumZ)}},{key:"focusOverlay",value:function focusOverlay(){var current=/** @type {?} */this.currentOverlay();if(current){current._applyFocus()}}/**
     * Updates the backdrop z-index.
     */},{key:"trackBackdrop",value:function trackBackdrop(){var overlay=this._overlayWithBackdrop();// Avoid creating the backdrop if there is no overlay with backdrop.
if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;// Property observers are not fired until element is attached
// in Polymer 2.x, so we ensure element is attached if needed.
// https://github.com/Polymer/polymer/issues/4526
this.backdropElement.prepare()}/**
     * @return {!Array<!Element>}
     */},{key:"getBackdrops",value:function getBackdrops(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops}/**
     * Returns the z-index for the backdrop.
     * @return {number}
     */},{key:"backdropZ",value:function backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}/**
     * Returns the top opened overlay that has a backdrop.
     * @return {!Element|undefined}
     * @private
     */},{key:"_overlayWithBackdrop",value:function _overlayWithBackdrop(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}}/**
     * Calculates the minimum z-index for the overlay.
     * @param {Element=} overlay
     * @private
     */},{key:"_getZ",value:function _getZ(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);// Check if is a number
// Number.isNaN not supported in IE 10+
if(z1===z1){z=z1}}return z}/**
     * @param {!Element} element
     * @param {number|string} z
     * @private
     */},{key:"_setZ",value:function _setZ(element,z){element.style.zIndex=z}/**
     * @param {!Element} overlay
     * @param {number} aboveZ
     * @private
     */},{key:"_applyOverlayZ",value:function _applyOverlayZ(overlay,aboveZ){this._setZ(overlay,aboveZ+2)}/**
     * Returns the deepest overlay in the path.
     * @param {!Array<!Element>=} path
     * @return {!Element|undefined}
     * @suppress {missingProperties}
     * @private
     */},{key:"_overlayInPath",value:function _overlayInPath(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}}/**
     * Ensures the click event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureClick",value:function _onCaptureClick(event){var i=this._overlays.length-1;if(-1===i)return;var path=/** @type {!Array<!EventTarget>} */(0,_vaadinApp.dom)(event).path,overlay;// Check if clicked outside of overlay.
while((overlay=/** @type {?} */this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}}/**
     * Ensures the focus event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureFocus",value:function _onCaptureFocus(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}}/**
     * Ensures TAB and ESC keyboard events are delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureKeyDown",value:function _onCaptureKeyDown(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}}/**
     * Returns if the overlay1 should be behind overlay2.
     * @param {!Element} overlay1
     * @param {!Element} overlay2
     * @return {boolean}
     * @suppress {missingProperties}
     * @private
     */},{key:"_shouldBeBehindOverlay",value:function _shouldBeBehindOverlay(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}},{key:"backdropElement",get:function get(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement}/**
     * The deepest active element.
     * @return {!Element} activeElement the active element
     */},{key:"deepActiveElement",get:function get(){var active=document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes.
// In these cases, default it to document.body.
if(!active||!1===babelHelpers.instanceof(active,Element)){active=document.body}while(active.root&&(0,_vaadinApp.dom)(active.root).activeElement){active=(0,_vaadinApp.dom)(active.root).activeElement}return active}}]);return IronOverlayManagerClass}();_exports.IronOverlayManagerClass=IronOverlayManagerClass;;var IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=[// Modern `wheel` event for mouse wheel scrolling:
"wheel",// Older, non-standard `mousewheel` event for some FF:
"mousewheel",// IE:
"DOMMouseScroll",// Touch enabled devices
"touchstart","touchmove"],_boundScrollHandler;/**
    * Used to avoid computing event.path and filter scrollable nodes (better perf).
    * @type {?EventTarget}
    */_exports._boundScrollHandler=_boundScrollHandler;/**
                          * The current element that defines the DOM boundaries of the
                          * scroll lock. This is always the most recently locking element.
                          *
                          * @type {!Node|undefined}
                          */var currentLockingElement;_exports.currentLockingElement=currentLockingElement;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}/**
   * Push an element onto the current scroll lock stack. The most recently
   * pushed element and its children will be considered scrollable. All
   * other elements will not be scrollable.
   *
   * Scroll locking is implemented as a stack so that cases such as
   * dropdowns within dropdowns are handled well.
   *
   * @param {!HTMLElement} element The element that should lock scroll.
   */function pushScrollLock(element){// Prevent pushing the same element twice
if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}/**
   * Remove an element from the scroll lock stack. The element being
   * removed does not need to be the most recently pushed element. However,
   * the scroll lock constraints only change when the most recently pushed
   * element is removed.
   *
   * @param {!HTMLElement} element The element to remove from the scroll
   * lock stack.
   */function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}var _lockingElements=[];_exports._lockingElements=_lockingElements;var _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;var _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){// NOTE(cdata): This method iterates over content elements and their
// corresponding distributed nodes to implement a contains-like method
// that pierces through the composed tree of the ShadowDOM. Results of
// this operation are cached (elsewhere) on a per-scroll-lock basis, to
// guard against potentially expensive lookups happening repeatedly as
// a user scrolls / touchmoves.
var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=(0,_vaadinApp.dom)(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=(0,_vaadinApp.dom)(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){// Avoid canceling an event with cancelable=false, e.g. scrolling is in
// progress and cannot be interrupted.
if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}// If event has targetTouches (touch event), update last touch position.
if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}/**
   * @package
   */function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}/**
   * Returns true if the event causes scroll outside the current locking
   * element, e.g. pointer/keyboard interactions, or scroll "leaking"
   * outside the locking element when it is already at its scroll boundaries.
   * @param {!Event} event
   * @return {boolean}
   * @package
   */function _shouldPreventScrolling(event){// Update if root target changed. For touch events, ensure we don't
// update during touchmove.
var target=(0,_vaadinApp.dom)(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes((0,_vaadinApp.dom)(event).path)}// Prevent event if no scrollable nodes.
if(!lastScrollableNodes.length){return!0}// Don't prevent touchstart event inside the locking element when it has
// scrollable nodes.
if("touchstart"===event.type){return!1}// Get deltaX/Y.
var info=_getScrollInfo(event);// Prevent if there is no child that can scroll.
return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}/**
   * Returns an array of scrollable nodes up to the current locking element,
   * which is included too if scrollable.
   * @param {!Array<!Node>} nodes
   * @return {!Array<!Node>} scrollables
   * @package
   */function _getScrollableNodes(nodes){// Loop from root target to locking element (included).
for(var scrollables=[],lockingIndex=nodes.indexOf(/** @type {!Node} */currentLockingElement),i=0;i<=lockingIndex;i++){// Skip non-Element nodes.
if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=/** @type {!Element} */nodes[i],style=node.style;// Check inline style before checking computed style.
if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}/**
   * Returns the node that is scrolling. If there is no scrolling,
   * returns undefined.
   * @param {!Array<!Node>} nodes
   * @param {number} deltaX Scroll delta on the x-axis
   * @param {number} deltaY Scroll delta on the y-axis
   * @return {!Node|undefined}
   * @package
   */function _getScrollingNode(nodes,deltaX,deltaY){// No scroll.
if(!deltaX&&!deltaY){return}// Check only one axis according to where there is more scroll.
// Prefer vertical to horizontal.
for(var verticalScroll=Math.abs(deltaY)>=Math.abs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){// delta < 0 is scroll up, delta > 0 is scroll down.
canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{// delta < 0 is scroll left, delta > 0 is scroll right.
canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}/**
   * Returns scroll `deltaX` and `deltaY`.
   * @param {!Event} event The scroll event
   * @return {{deltaX: number, deltaY: number}} Object containing the
   * x-axis scroll delta (positive: scroll right, negative: scroll left,
   * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
   * negative: scroll up, 0: no scroll).
   * @package
   */function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};// Already available.
if("deltaX"in event){}// do nothing, values are already good.
// Safari has scroll info in `wheelDeltaX/Y`.
else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}// IE10 has only vertical scroll info in `wheelDelta`.
else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}// Firefox has scroll info in `detail` and `axis`.
else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}// On mobile devices, calculate scroll direction.
else if(event.targetTouches){var touch=event.targetTouches[0];// Touch moves from right to left => scrolling goes right.
info.deltaX=lastTouchPosition.pageX-touch.pageX;// Touch moves from down to up => scrolling goes down.
info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;var IronOverlayBehaviorImpl={properties:{/**
     * True if the overlay is currently displayed.
     */opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},/**
     * True if the overlay was canceled when it was last closed.
     */canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},/**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */withBackdrop:{observer:"_withBackdropChanged",type:Boolean},/**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */noAutoFocus:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay with the ESC key.
     */noCancelOnEscKey:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay by clicking outside it.
     */noCancelOnOutsideClick:{type:Boolean,value:!1},/**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */closingReason:{// was a getter before, but needs to be a property so other
// behaviors can override this.
type:Object},/**
     * Set to true to enable restoring of focus when overlay is closed.
     */restoreFocusOnClose:{type:Boolean,value:!1},/**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */allowClickThrough:{type:Boolean},/**
     * Set to true to keep overlay always on top.
     */alwaysOnTop:{type:Boolean},/**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */scrollAction:{type:String},/**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */_manager:{type:Object,value:IronOverlayManager},/**
     * The node being focused.
     * @type {?Node}
     */_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],/**
   * The backdrop element.
   * @return {!Element}
   */get backdropElement(){return this._manager.backdropElement},/**
   * Returns the node to give focus to.
   * @return {!Node}
   */get _focusNode(){return this._focusedChild||(0,_vaadinApp.dom)(this).querySelector("[autofocus]")||this},/**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},/**
   * @return {void}
   */ready:function ready(){// Used to skip calls to notifyResize and refit while the overlay is
// animating.
this.__isAnimating=!1;// with-backdrop needs tabindex to be set in order to trap the focus.
// If it is not set, IronOverlayBehavior will set it, and remove it if
// with-backdrop = false.
this.__shouldRemoveTabIndex=!1;// Used for wrapping the focus on TAB / Shift+TAB.
this.__firstFocusableNode=this.__lastFocusableNode=null;// Used by to keep track of the RAF callbacks.
this.__rafs={};// Focused node before overlay gets opened. Can be restored on close.
this.__restoreFocusNode=null;// Scroll info to be restored.
this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);// Root nodes hosting the overlay, used to listen for scroll events on them.
this.__rootNodes=null;this._ensureSetup()},/** @override */attached:function attached(){// Call _openedChanged here so that position can be computed correctly.
if(this.opened){this._openedChanged(this.opened)}this._observer=(0,_vaadinApp.dom)(this).observeNodes(this._onNodesChange)},/** @override */detached:function detached(){// TODO(bicknellr): Per spec, checking `this._observer` should never be
// necessary because `connectedCallback` and `disconnectedCallback` should
// always be called in alternating order. However, the custom elements
// polyfill doesn't implement the reactions stack, so this can sometimes
// happen, particularly if ShadyDOM is in noPatch mode where the custom
// elements polyfill is installed before ShadyDOM. We should investigate
// whether or not we can either implement the reactions stack without major
// performance implications or patch ShadyDOM's functions to restore the
// typical ShadyDOM-then-custom-elements order and remove this workaround.
if(this._observer){(0,_vaadinApp.dom)(this).unobserveNodes(this._observer)}this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);// We got detached while animating, ensure we show/hide the overlay
// and fire iron-overlay-opened/closed event!
if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{// Restore the focus if necessary.
this._applyFocus();this._finishRenderClosed()}}},/**
   * Toggle the opened state of the overlay.
   */toggle:function toggle(){this._setCanceled(!1);this.opened=!this.opened},/**
   * Open the overlay.
   */open:function open(){this._setCanceled(!1);this.opened=!0},/**
   * Close the overlay.
   */close:function close(){this._setCanceled(!1);this.opened=!1},/**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */cancel:function cancel(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},/**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */invalidateTabbables:function invalidateTabbables(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function _ensureSetup(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},/**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */_openedChanged:function _openedChanged(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}// Defer any animation-related code on attached
// (_openedChanged gets called again on attached).
if(!this.isAttached){return}this.__isAnimating=!0;// Deraf for non-blocking rendering.
this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function _canceledChanged(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function _withBackdropChanged(){// If tabindex is already set, no need to override it.
if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},/**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */_prepareRenderOpened:function _prepareRenderOpened(){// Store focused node.
this.__restoreFocusNode=this._manager.deepActiveElement;// Needed to calculate the size of the overlay so that transitions on its
// size will have the correct starting points.
this._preparePositioning();this.refit();this._finishPositioning();// Safari will apply the focus to the autofocus element when displayed
// for the first time, so we make sure to return the focus where it was.
if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},/**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */_renderOpened:function _renderOpened(){this._finishRenderOpened()},/**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */_renderClosed:function _renderClosed(){this._finishRenderClosed()},/**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */_finishRenderOpened:function _finishRenderOpened(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},/**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */_finishRenderClosed:function _finishRenderClosed(){// Hide the overlay.
this.style.display="none";// Reset z-index only at the end of the animation.
this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function _preparePositioning(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function _finishPositioning(){// First, make it invisible & reactivate animations.
this.style.display="none";// Force reflow before re-enabling animations so that they don't start.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";// Now that animations are enabled, make it visible again
this.style.display="";// Force reflow, so that following animations are properly started.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop},/**
   * Applies focus according to the opened state.
   * @protected
   */_applyFocus:function _applyFocus(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{// Restore focus.
if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by an user interaction (e.g. click on a
// button outside the overlay).
var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||composedContains(this,activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},/**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureClick:function _onCaptureClick(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},/**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureFocus:function _onCaptureFocus(event){if(!this.withBackdrop){return}var path=(0,_vaadinApp.dom)(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=/** @type {Node} */path[0]}},/**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureEsc:function _onCaptureEsc(event){if(!this.noCancelOnEscKey){this.cancel(event)}},/**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */_onCaptureTab:function _onCaptureTab(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();// TAB wraps from last to first focusable.
// Shift + TAB wraps from first to last focusable.
var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){// If nodeToCheck is the same as nodeToSet, it means we have an overlay
// with 0 or 1 focusables; in either case we still need to trap the
// focus within the overlay.
shouldWrap=!0}else{// In dom=shadow, the manager will receive focus changes on the main
// root but not the ones within other shadow roots, so we can't rely on
// _focusedChild, but we should check the deepest active element.
var focusedNode=this._manager.deepActiveElement;// If the active element is not the nodeToCheck but the overlay itself,
// it means the focus is about to go outside the overlay, hence we
// should prevent that (e.g. user opens the overlay and hit Shift+TAB).
shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){// When the overlay contains the last focusable element of the document
// and it's already focused, pressing TAB would move the focus outside
// the document (e.g. to the browser search bar). Similarly, when the
// overlay contains the first focusable element of the document and it's
// already focused, pressing Shift+TAB would move the focus outside the
// document (e.g. to the browser search bar).
// In both cases, we would not receive a focus event, but only a blur.
// In order to achieve focus wrapping, we prevent this TAB event and
// force the focus. This will also prevent the focus to temporarily move
// outside the overlay, which might cause scrolling.
event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},/**
   * Refits if the overlay is opened and not animating.
   * @protected
   */_onIronResize:function _onIronResize(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},/**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */_onNodesChange:function _onNodesChange(){if(this.opened&&!this.__isAnimating){// It might have added focusable nodes, so invalidate cached values.
this.invalidateTabbables();this.notifyResize()}},/**
   * Updates the references to the first and last focusable nodes.
   * @private
   */__ensureFirstLastFocusables:function __ensureFirstLastFocusables(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},/**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */__openedChanged:function __openedChanged(){if(this.opened){// Make overlay visible, then add it to the manager.
this._prepareRenderOpened();this._manager.addOverlay(this);// Move the focus to the child node with [autofocus].
this._applyFocus();this._renderOpened()}else{// Remove overlay, then restore the focus before actually closing.
this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},/**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */__deraf:function __deraf(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},/**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */__updateScrollObservers:function __updateScrollObservers(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},/**
   * @private
   */__addScrollListeners:function __addScrollListeners(){if(!this.__rootNodes){this.__rootNodes=[];// Listen for scroll events in all shadowRoots hosting this overlay only
// when in native ShadowDOM.
if(_vaadinApp.useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},/**
   * @private
   */__removeScrollListeners:function __removeScrollListeners(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},/**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */__isValidScrollAction:function __isValidScrollAction(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},/**
   * @private
   */__onCaptureScroll:function __onCaptureScroll(event){if(this.__isAnimating){return}// Check if scroll outside the overlay.
if(0<=(0,_vaadinApp.dom)(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":// NOTE: scrolling might happen if a scroll event is not cancellable, or
// if user pressed keys that cause scrolling (they're not prevented in
// order not to break a11y features like navigate with arrow keys).
this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},/**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */__saveScrollPosition:function __saveScrollPosition(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{// Since we don't know if is the body or html, get max.
this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)}},/**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */__restoreScrollPosition:function __restoreScrollPosition(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{// Since we don't know if is the body or html, set both.
document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;var composedParent=function composedParent(node){return node.assignedSlot||node.parentNode||node.host},composedContains=function composedContains(ancestor,descendant){for(var element=descendant;element;element=composedParent(element)){if(element===ancestor){return!0}}return!1},IronOverlayBehavior=[IronFitBehavior,_vaadinApp.IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;/**
                                                                                                       * Fired after the overlay opens.
                                                                                                       * @event iron-overlay-opened
                                                                                                       */ /**
                                                                                                           * Fired when the overlay is canceled, but before it is closed.
                                                                                                           * @event iron-overlay-canceled
                                                                                                           * @param {Event} event The closing of the overlay can be prevented
                                                                                                           * by calling `event.preventDefault()`. The `event.detail` is the original event
                                                                                                           * that originated the canceling (e.g. ESC keyboard event or click event outside
                                                                                                           * the overlay).
                                                                                                           */ /**
                                                                                                               * Fired after the overlay closes.
                                                                                                               * @event iron-overlay-closed
                                                                                                               * @param {Event} event The `event.detail` is the `closingReason` property
                                                                                                               * (contains `canceled`, whether the overlay was canceled).
                                                                                                               */var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;var NeonAnimatableBehavior={properties:{/**
     * Animation configuration. See README for more info.
     */animationConfig:{type:Object},/**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */entryAnimation:{observer:"_entryAnimationChanged",type:String},/**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function _entryAnimationChanged(){this.animationConfig=this.animationConfig||{};this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function _exitAnimationChanged(){this.animationConfig=this.animationConfig||{};this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function _copyProperties(config1,config2){// shallowly copy properties from config2 to config1
for(var property in config2){config1[property]=config2[property]}},_cloneConfig:function _cloneConfig(config){var clone={isClone:!0};this._copyProperties(clone,config);return clone},_getAnimationConfigRecursive:function _getAnimationConfigRecursive(type,map,allConfigs){if(!this.animationConfig){return}if(this.animationConfig.value&&"function"===typeof this.animationConfig.value){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}// type is optional
var thisConfig;if(type){thisConfig=this.animationConfig[type]}else{thisConfig=this.animationConfig}if(!Array.isArray(thisConfig)){thisConfig=[thisConfig]}// iterate animations and recurse to process configurations from child nodes
if(thisConfig){for(var config,index=0;config=thisConfig[index];index++){if(config.animatable){config.animatable._getAnimationConfigRecursive(config.type||type,map,allConfigs)}else{if(config.id){var cachedConfig=map[config.id];if(cachedConfig){// merge configurations with the same id, making a clone lazily
if(!cachedConfig.isClone){map[config.id]=this._cloneConfig(cachedConfig);cachedConfig=map[config.id]}this._copyProperties(cachedConfig,config)}else{// put any configs with an id into a map
map[config.id]=config}}else{allConfigs.push(config)}}}}},/**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */getAnimationConfig:function getAnimationConfig(type){var map={},allConfigs=[];this._getAnimationConfigRecursive(type,map,allConfigs);// append the configurations saved in the map to the array
for(var key in map){allConfigs.push(map[key])}return allConfigs}};_exports.NeonAnimatableBehavior=NeonAnimatableBehavior;var neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};_exports.$neonAnimatableBehavior=neonAnimatableBehavior;var NeonAnimationRunnerBehaviorImpl={_configureAnimations:function _configureAnimations(configs){var results=[],resultsToPlay=[];if(0<configs.length){for(var _config,index=0,neonAnimation;_config=configs[index];index++){neonAnimation=document.createElement(_config.name);// is this element actually a neon animation?
if(neonAnimation.isNeonAnimation){var result=null;// Closure compiler does not work well with a try / catch here.
// .configure needs to be explicitly defined
if(!neonAnimation.configure){/**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */neonAnimation.configure=function(config){return null}}result=neonAnimation.configure(_config);resultsToPlay.push({result:result,config:_config,neonAnimation:neonAnimation})}else{console.warn(this.is+":",_config.name,"not found!")}}}for(var i=0;i<resultsToPlay.length;i++){var _result=resultsToPlay[i].result,_config2=resultsToPlay[i].config,_neonAnimation=resultsToPlay[i].neonAnimation;// configuration or play could fail if polyfills aren't loaded
try{// Check if we have an Effect rather than an Animation
if("function"!=typeof _result.cancel){_result=document.timeline.play(_result)}}catch(e){_result=null;console.warn("Couldnt play","(",_config2.name,").",e)}if(_result){results.push({neonAnimation:_neonAnimation,config:_config2,animation:_result})}}return results},_shouldComplete:function _shouldComplete(activeEntries){for(var finished=!0,i=0;i<activeEntries.length;i++){if("finished"!=activeEntries[i].animation.playState){finished=!1;break}}return finished},_complete:function _complete(activeEntries){for(var i=0;i<activeEntries.length;i++){activeEntries[i].neonAnimation.complete(activeEntries[i].config)}for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.cancel()}},/**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */playAnimation:function playAnimation(type,cookie){var configs=this.getAnimationConfig(type);if(!configs){return}this._active=this._active||{};if(this._active[type]){this._complete(this._active[type]);delete this._active[type]}var activeEntries=this._configureAnimations(configs);if(0==activeEntries.length){this.fire("neon-animation-finish",cookie,{bubbles:!1});return}this._active[type]=activeEntries;for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.onfinish=function(){if(this._shouldComplete(activeEntries)){this._complete(activeEntries);delete this._active[type];this.fire("neon-animation-finish",cookie,{bubbles:!1})}}.bind(this)}},/**
   * Cancels the currently running animations.
   */cancelAnimation:function cancelAnimation(){for(var k in this._active){var entries=this._active[k];for(var j in entries){entries[j].animation.cancel()}}this._active={}}};/** @polymerBehavior */_exports.NeonAnimationRunnerBehaviorImpl=NeonAnimationRunnerBehaviorImpl;var NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];_exports.NeonAnimationRunnerBehavior=NeonAnimationRunnerBehavior;var neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};_exports.$neonAnimationRunnerBehavior=neonAnimationRunnerBehavior;(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject3_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-dropdown",behaviors:[IronControlState,IronA11yKeysBehavior,IronOverlayBehavior,NeonAnimationRunnerBehavior],properties:{/**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},/**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */verticalAlign:{type:String,value:"top",reflectToAttribute:!0},/**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */openAnimationConfig:{type:Object},/**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */closeAnimationConfig:{type:Object},/**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */focusTarget:{type:Object},/**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */noAnimations:{type:Boolean,value:!1},/**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     * This property is a shortcut to set `scrollAction` to lock or refit.
     * Prefer directly setting the `scrollAction` property.
     */allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],/**
   * The element that is contained by the dropdown, if any.
   */get containedElement(){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
for(var nodes=(0,_vaadinApp.dom)(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},ready:function ready(){// Ensure scrollAction is set.
if(!this.scrollAction){this.scrollAction=this.allowOutsideScroll?"refit":"lock"}this._readied=!0},attached:function attached(){if(!this.sizingTarget||this.sizingTarget===this){this.sizingTarget=this.containedElement||this}},detached:function detached(){this.cancelAnimation()},/**
   * Called when the value of `opened` changes.
   * Overridden from `IronOverlayBehavior`
   */_openedChanged:function _openedChanged(){if(this.opened&&this.disabled){this.cancel()}else{this.cancelAnimation();this._updateAnimationConfig();IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)}},/**
   * Overridden from `IronOverlayBehavior`.
   */_renderOpened:function _renderOpened(){if(!this.noAnimations&&this.animationConfig.open){this.$.contentWrapper.classList.add("animating");this.playAnimation("open")}else{IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)}},/**
   * Overridden from `IronOverlayBehavior`.
   */_renderClosed:function _renderClosed(){if(!this.noAnimations&&this.animationConfig.close){this.$.contentWrapper.classList.add("animating");this.playAnimation("close")}else{IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)}},/**
   * Called when animation finishes on the dropdown (when opening or
   * closing). Responsible for "completing" the process of opening or
   * closing the dropdown by positioning it or setting its display to
   * none.
   */_onNeonAnimationFinish:function _onNeonAnimationFinish(){this.$.contentWrapper.classList.remove("animating");if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}},/**
   * Constructs the final animation config from different properties used
   * to configure specific parts of the opening and closing animations.
   */_updateAnimationConfig:function _updateAnimationConfig(){// Update the animation node to be the containedElement.
for(var animationNode=this.containedElement,animations=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<animations.length;i++){animations[i].node=animationNode}this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},/**
   * Updates the overlay position based on configured horizontal
   * and vertical alignment.
   */_updateOverlayPosition:function _updateOverlayPosition(){if(this.isAttached){// This triggers iron-resize, and iron-overlay-behavior will call refit if
// needed.
this.notifyResize()}},/**
   * Sets scrollAction according to the value of allowOutsideScroll.
   * Prefer setting directly scrollAction.
   */_allowOutsideScrollChanged:function _allowOutsideScrollChanged(allowOutsideScroll){// Wait until initial values are all set.
if(!this._readied){return}if(!allowOutsideScroll){this.scrollAction="lock"}else if(!this.scrollAction||"lock"===this.scrollAction){this.scrollAction="refit"}},/**
   * Apply focus to focusTarget or containedElement
   */_applyFocus:function _applyFocus(){var focusTarget=this.focusTarget||this.containedElement;if(focusTarget&&this.opened&&!this.noAutoFocus){focusTarget.focus()}else{IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}}});var template=(0,_vaadinApp.html)(_templateObject4_f4bde900d04c11ea9be8ed19ce1a2128());template.setAttribute("style","display: none;");document.head.appendChild(template.content);var template$1=(0,_vaadinApp.html)(_templateObject5_f4bde900d04c11ea9be8ed19ce1a2128());template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);var IronFormElementBehavior={properties:{/**
     * The name of this element.
     */name:{type:String},/**
     * The value for this element.
     * @type {*}
     */value:{notify:!0,type:String},/**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */required:{type:Boolean,value:!1}},// Empty implementations for backcompatibility.
attached:function attached(){},detached:function detached(){}};_exports.IronFormElementBehavior=IronFormElementBehavior;var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};_exports.$ironFormElementBehavior=ironFormElementBehavior;var IronMeta=/*#__PURE__*/function(){/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */function IronMeta(options){babelHelpers.classCallCheck(this,IronMeta);IronMeta[" "](options);/** @type {string} */this.type=options&&options.type||"default";/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&"value"in options){/** @type {*} */this.value=options.value}}/** @return {*} */babelHelpers.createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value}},{key:"value",get:function get(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}/** @param {*} value */,set:function set(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}}]);return IronMeta}();_exports.IronMeta=IronMeta;;// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
                                `iron-meta` is a generic element you can use for sharing information across the
                                DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
                                such that any instance of iron-meta has access to the shared information. You
                                can use `iron-meta` to share whatever you want (or create an extension [like
                                x-meta] for enhancements).
                                
                                The `iron-meta` instances containing your actual data can be loaded in an
                                import, or constructed in any way you see fit. The only requirement is that you
                                create them before you try to access them.
                                
                                Examples:
                                
                                If I create an instance like this:
                                
                                    <iron-meta key="info" value="foo/bar"></iron-meta>
                                
                                Note that value="foo/bar" is the metadata I've defined. I could define more
                                attributes or use child nodes to define additional metadata.
                                
                                Now I can access that element (and it's metadata) from any iron-meta instance
                                via the byKey method, e.g.
                                
                                    meta.byKey('info');
                                
                                Pure imperative form would be like:
                                
                                    document.createElement('iron-meta').byKey('info');
                                
                                Or, in a Polymer element, you can include a meta in your template:
                                
                                    <iron-meta id="meta"></iron-meta>
                                    ...
                                    this.$.meta.byKey('info');
                                
                                @group Iron Elements
                                @demo demo/index.html
                                @element iron-meta
                                */(0,_vaadinApp.Polymer)({is:"iron-meta",properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:"default"},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:!0},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function _selfChanged(self){if(self){this.value=this}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject6_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-icon",properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:_vaadinApp.Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function _iconChanged(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function _srcChanged(src){this._updateIcon()},_usesIconset:function _usesIconset(){return this.icon||!this.src},/** @suppress {visibility} */_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){(0,_vaadinApp.dom)(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;(0,_vaadinApp.dom)(this.root).appendChild(this._img)}}});(0,_vaadinApp.Polymer)({is:"iron-iconset-svg",properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:"_nameChanged"},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:!1},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function created(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function attached(){this.style.display="none"},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function getIconNames(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function applyIcon(element,iconName){// Remove old svg element
this.removeIcon(element);// install new svg element
var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){// insert svg element into shadow root, if it exists
var pde=(0,_vaadinApp.dom)(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function removeIcon(element){// Remove old svg element
if(element._svgIcon){(0,_vaadinApp.dom)(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function _targetIsRTL(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function _nameChanged(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function _createIconMap(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var icons=Object.create(null);(0,_vaadinApp.dom)(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function _cloneIcon(id,mirrorAllowed){// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function _prepareSvgClone(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject7_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-image",properties:{/**
     * The URL of an image.
     */src:{type:String,value:""},/**
     * A short text alternative for the image.
     */alt:{type:String,value:null},/**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */crossorigin:{type:String,value:null},/**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */preventLoad:{type:Boolean,value:!1},/**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */sizing:{type:String,value:null,reflectToAttribute:!0},/**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */position:{type:String,value:"center"},/**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */preload:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholder:{type:String,value:null,observer:"_placeholderChanged"},/**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */fade:{type:Boolean,value:!1},/**
     * Read-only value that is true when the image is loaded.
     */loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that indicates that the last set `src` failed to load.
     */error:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */width:{observer:"_widthChanged",type:Number,value:null},/**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function created(){this._resolvedSrc=""},_imgOnLoad:function _imgOnLoad(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function _imgOnError(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function _computePlaceholderHidden(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function _computePlaceholderClassName(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function _computeImgDivHidden(){return!this.sizing},_computeImgDivARIAHidden:function _computeImgDivARIAHidden(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function _computeImgDivARIALabel(){if(null!==this.alt){return this.alt}// Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
// that URL x, but '' is the default for src.
if(""===this.src){return""}// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
var resolved=this._resolveSrc(this.src);// Remove query parts, get file name.
return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function _computeImgHidden(){return!!this.sizing},_widthChanged:function _widthChanged(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function _heightChanged(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function _loadStateObserver(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function _placeholderChanged(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function _transformChanged(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function _resolveSrc(testSrc){var resolved=(0,_vaadinApp.resolveUrl)(testSrc,this.$.baseURIAnchor.href);// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
if(2<=resolved.length&&"/"===resolved[0]&&"/"!==resolved[1]){// In IE location.origin might not work
// https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}});var IronValidatableBehaviorMeta=null;/**
                                                * `Use IronValidatableBehavior` to implement an element that validates
                                                * user input. Use the related `IronValidatorBehavior` to add custom
                                                * validation logic to an iron-input.
                                                *
                                                * By default, an `<iron-form>` element validates its fields when the user
                                                * presses the submit button. To validate a form imperatively, call the form's
                                                * `validate()` method, which in turn will call `validate()` on all its
                                                * children. By using `IronValidatableBehavior`, your custom element
                                                * will get a public `validate()`, which will return the validity of the
                                                * element, and a corresponding `invalid` attribute, which can be used for
                                                * styling.
                                                *
                                                * To implement the custom validation logic of your element, you must override
                                                * the protected `_getValidity()` method of this behaviour, rather than
                                                * `validate()`. See
                                                * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
                                                * for an example.
                                                *
                                                * ### Accessibility
                                                *
                                                * Changing the `invalid` property, either manually or by calling `validate()`
                                                * will update the `aria-invalid` attribute.
                                                *
                                                * @demo demo/index.html
                                                * @polymerBehavior
                                                */_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;var IronValidatableBehavior={properties:{/**
     * Name of the validator to use.
     */validator:{type:String},/**
     * True if the last call to `validate` is invalid.
     */invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function registered(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new IronMeta({type:"validator"})},_invalidChanged:function _invalidChanged(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},/* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},/**
   * @return {boolean} True if the validator `validator` exists.
   */hasValidator:function hasValidator(){return null!=this._validator},/**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */validate:function validate(value){// If this is an element that also has a value property, and there was
// no explicit value argument passed, use the element's property instead.
if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},/**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */_getValidity:function _getValidity(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject8_f4bde900d04c11ea9be8ed19ce1a2128()),is:"iron-input",behaviors:[IronValidatableBehavior],/**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */properties:{/**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */bindValue:{type:String,value:""},/**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */value:{type:String,computed:"_computeValue(bindValue)"},/**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */allowedPattern:{type:String},/**
     * Set to true to auto-validate the input value as you type.
     */autoValidate:{type:Boolean,value:!1},/**
     * The native input element.
     */_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function created(){IronA11yAnnouncer.requestAvailability();this._previousValidInput="";this._patternAlreadyChecked=!1},attached:function attached(){// If the input is added at a later time, update the internal reference.
this._observer=(0,_vaadinApp.dom)(this).observeNodes(function(info){this._initSlottedInput()}.bind(this))},detached:function detached(){if(this._observer){(0,_vaadinApp.dom)(this).unobserveNodes(this._observer);this._observer=null}},/**
   * Returns the distributed input element.
   */get inputElement(){return this._inputElement},_initSlottedInput:function _initSlottedInput(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value}this.fire("iron-input-ready")},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern)}else{switch(this.inputElement.type){case"number":pattern=/[0-9.,e-]/;break;}}return pattern},/**
   * @suppress {checkTypes}
   */_bindValueChanged:function _bindValueChanged(bindValue,inputElement){// The observer could have run before attached() when we have actually
// initialized this property.
if(!inputElement){return}if(bindValue===void 0){inputElement.value=null}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue}if(this.autoValidate){this.validate()}// manually notify because we don't want to notify until after setting value
this.fire("bind-value-changed",{value:bindValue})},_onInput:function _onInput(){// Need to validate each of the characters pasted if they haven't
// been validated inside `_onKeypress` already.
if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter("Invalid string of characters not entered.");this.inputElement.value=this._previousValidInput}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=!1},_isPrintable:function _isPrintable(event){// What a control/printable character is varies wildly based on the browser.
// - most control characters (arrows, backspace) do not send a `keypress`
// event
//   in Chrome, but the *do* on Firefox
// - in Firefox, when they do send a `keypress` event, control chars have
//   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
// - printable characters always send a keypress event.
// - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
// keyCode
//   always matches the charCode.
// None of this makes any sense.
// For these keys, ASCII code == browser keycode.
var anyNonPrintable=8==event.keyCode||// backspace
9==event.keyCode||// tab
13==event.keyCode||// enter
27==event.keyCode,mozNonPrintable=19==event.keyCode||// pause
20==event.keyCode||// caps lock
45==event.keyCode||// insert
46==event.keyCode||// delete
144==event.keyCode||// num lock
145==event.keyCode||// scroll lock
32<event.keyCode&&41>event.keyCode||// page up/down, end, home, arrows
111<event.keyCode&&124>event.keyCode;// escape
// For these keys, make sure it's a browser keycode and not an ASCII code.
// fn keys
return!anyNonPrintable&&!(0==event.charCode&&mozNonPrintable)},_onKeypress:function _onKeypress(event){if(!this.allowedPattern&&"number"!==this.inputElement.type){return}var regexp=this._patternRegExp;if(!regexp){return}// Handle special keys and backspace
if(event.metaKey||event.ctrlKey||event.altKey){return}// Check the pattern either here or in `_onInput`, but not in both.
this._patternAlreadyChecked=!0;var thisChar=String.fromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter("Invalid character "+thisChar+" not entered.")}},_checkPatternValidity:function _checkPatternValidity(){var regexp=this._patternRegExp;if(!regexp){return!0}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return!1}}return!0},/**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */validate:function validate(){if(!this.inputElement){this.invalid=!1;return!0}// Use the nested input's native validity.
var valid=this.inputElement.checkValidity();// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&""===this.bindValue){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_announceInvalidCharacter:function _announceInvalidCharacter(message){this.fire("iron-announce",{text:message})},_computeValue:function _computeValue(bindValue){return bindValue}});var IronSelection=/*#__PURE__*/function(){/**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */function IronSelection(selectCallback){babelHelpers.classCallCheck(this,IronSelection);this.selection=[];this.selectCallback=selectCallback}/**
     * Retrieves the selected item(s).
     *
     * @returns Returns the selected item(s). If the multi property is true,
     * `get` will return an array, otherwise it will return
     * the selected item or undefined if there is no selection.
     */babelHelpers.createClass(IronSelection,[{key:"get",value:function get(){return this.multi?this.selection.slice():this.selection[0]}/**
     * Clears all the selection except the ones indicated.
     *
     * @param {Array} excludes items to be excluded.
     */},{key:"clear",value:function clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||0>excludes.indexOf(item)){this.setItemSelected(item,!1)}},this)}/**
     * Indicates if a given item is selected.
     *
     * @param {*} item The item whose selection state should be checked.
     * @return {boolean} Returns true if `item` is selected.
     */},{key:"isSelected",value:function isSelected(item){return 0<=this.selection.indexOf(item)}/**
     * Sets the selection state for a given item to either selected or deselected.
     *
     * @param {*} item The item to select.
     * @param {boolean} isSelected True for selected, false for deselected.
     */},{key:"setItemSelected",value:function setItemSelected(item,isSelected){if(null!=item){if(isSelected!==this.isSelected(item)){// proceed to update selection only if requested state differs from
// current
if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(0<=i){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}/**
     * Sets the selection state for a given item. If the `multi` property
     * is true, then the selected state of `item` will be toggled; otherwise
     * the `item` will be selected.
     *
     * @param {*} item The item to select.
     */},{key:"select",value:function select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),!1);this.setItemSelected(item,!0)}}/**
     * Toggles the selection state for `item`.
     *
     * @param {*} item The item to toggle.
     */},{key:"toggle",value:function toggle(item){this.setItemSelected(item,!this.isSelected(item))}}]);return IronSelection}();_exports.IronSelection=IronSelection;;var ironSelection={IronSelection:IronSelection};_exports.$ironSelection=ironSelection;var IronSelectableBehavior={/**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */ /**
       * Fired when an item is selected
       *
       * @event iron-select
       */ /**
           * Fired when an item is deselected
           *
           * @event iron-deselect
           */ /**
               * Fired when the list of selectable items changes (e.g., items are
               * added or removed). The detail of the event is a mutation record that
               * describes what changed.
               *
               * @event iron-items-changed
               */properties:{/**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */attrForSelected:{type:String,value:null},/**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */selected:{type:String,notify:!0},/**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */selectedItem:{type:Object,readOnly:!0,notify:!0},/**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},/**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */selectable:String,/**
     * The class to set on elements when selected.
     */selectedClass:{type:String,value:"iron-selected"},/**
     * The attribute to set on elements when selected.
     */selectedAttribute:{type:String,value:null},/**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */fallbackSelection:{type:String,value:null},/**
     * The list of items from which a selection can be made.
     */items:{type:Array,readOnly:!0,notify:!0,value:function value(){return[]}},/**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */_excludedLocalNames:{type:Object,value:function value(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function created(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function attached(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function detached(){if(this._observer){(0,_vaadinApp.dom)(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},/**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */indexOf:function indexOf(item){return this.items?this.items.indexOf(item):-1},/**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function select(value){this.selected=value},/**
   * Selects the previous item.
   *
   * @method selectPrevious
   */selectPrevious:function selectPrevious(){var length=this.items.length,index=length-1;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)-1+length)%length}this.selected=this._indexToValue(index)},/**
   * Selects the next item.
   *
   * @method selectNext
   */selectNext:function selectNext(){var index=0;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)+1)%this.items.length}this.selected=this._indexToValue(index)},/**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */selectIndex:function selectIndex(index){this.select(this._indexToValue(index))},/**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */forceSynchronousItemUpdate:function forceSynchronousItemUpdate(){if(this._observer&&"function"===typeof this._observer.flush){// NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
// `observeNodes` callbacks. Polymer 2.x returns an object from
// `observeNodes` with a `flush` that synchronously gives the callback any
// pending MutationRecords (retrieved with `takeRecords`). Any case where
// ShadyDOM flushes were expected to synchronously trigger item updates
// will now require calling `forceSynchronousItemUpdate`.
this._observer.flush()}else{this._updateItems()}},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function _checkFallback(){this._updateSelected()},_addListener:function _addListener(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function _removeListener(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function _activateEventChanged(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function _updateItems(){var nodes=(0,_vaadinApp.dom)(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function _updateAttrForSelected(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function _updateSelected(){this._selectSelected(this.selected)},_selectSelected:function _selectSelected(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}// Check for items, since this array is populated only when attached
// Since Number(0) is falsy, explicitly check for undefined
if(this.fallbackSelection&&this.items.length&&this._selection.get()===void 0){this.selected=this.fallbackSelection}},_filterItem:function _filterItem(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function _valueToItem(value){return null==value?null:this.items[this._valueToIndex(value)]},_valueToIndex:function _valueToIndex(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return+value}},_indexToValue:function _indexToValue(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function _valueForItem(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return-1===i?null:i}var propValue=item[(0,_vaadinApp.dashToCamelCase)(this.attrForSelected)];return propValue!=void 0?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function _applySelection(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function _selectionChange(){this._setSelectedItem(this._selection.get())},// observe items change under the given node.
_observeItems:function _observeItems(node){return(0,_vaadinApp.dom)(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();// Let other interested parties know about the change so that
// we don't have to recreate mutation observers everywhere.
this.fire("iron-items-changed",mutation,{bubbles:!1,cancelable:!1})})},_activateHandler:function _activateHandler(e){var t=e.target,items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(0<=i){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function _itemActivate(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:!0}).defaultPrevented){this.select(value)}}};_exports.IronSelectableBehavior=IronSelectableBehavior;var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};_exports.$ironSelectable=ironSelectable;var IronMultiSelectableBehaviorImpl={properties:{/**
     * If true, multiple selections are allowed.
     */multi:{type:Boolean,value:!1,observer:"multiChanged"},/**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */selectedValues:{type:Array,notify:!0,value:function value(){return[]}},/**
     * Returns an array of currently selected items.
     */selectedItems:{type:Array,readOnly:!0,notify:!0,value:function value(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],/**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function select(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function multiChanged(multi){this._selection.multi=multi;this._updateSelected()},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function _updateAttrForSelected(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&0<this.selectedItems.length){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return null!=unfilteredValue},this)}},_updateSelected:function _updateSelected(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function _selectMulti(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return null!==item&&item!==void 0});// clear all but the current selected items
this._selection.clear(selectedItems);// select only those not selected yet
for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],!0)}// Check for items, since this array is populated only when attached
if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function _selectionChange(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(null!==s&&s!==void 0){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function _toggleSelected(value){var i=this.selectedValues.indexOf(value),unselected=0>i;if(unselected){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function _valuesToItems(values){return null==values?null:values.map(function(value){return this._valueToItem(value)},this)}};/** @polymerBehavior */_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;var IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};_exports.$ironMultiSelectable=ironMultiSelectable;var IronMenuBehaviorImpl={properties:{/**
     * Returns the currently focused item.
     * @type {?Object}
     */focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},/**
     * The attribute to use on menu items to look up the item title. Typing the
     * first letter of an item when the menu is open focuses that item. If
     * unset, `textContent` will be used.
     */attrForItemTitle:{type:String},/**
     * @type {boolean}
     */disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},/**
   * The list of keys has been taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   * @private
   */_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],/** @private */_SEARCH_RESET_TIMEOUT_MS:1e3,/** @private */_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},/**
   * @type {!Object}
   */keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function attached(){this._resetTabindices()},/**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param {string|number} value the value to select.
   */select:function select(value){// Cancel automatically focusing a default item if the menu received focus
// through a user action selecting a particular item.
if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null}var item=this._valueToItem(value);if(item&&item.hasAttribute("disabled"))return;this._setFocusedItem(item);IronMultiSelectableBehaviorImpl.select.apply(this,arguments)},/**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */_resetTabindices:function _resetTabindices(){var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(item){item.setAttribute("tabindex",item===firstSelectedItem?"0":"-1");item.setAttribute("aria-selected",this._selection.isSelected(item))},this)},/**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param {boolean} multi True if the menu should be multi-selectable.
   */_updateMultiselectable:function _updateMultiselectable(multi){if(multi){this.setAttribute("aria-multiselectable","true")}else{this.removeAttribute("aria-multiselectable")}},/**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param {KeyboardEvent} event A KeyboardEvent.
   */_focusWithKeyboardEvent:function _focusWithKeyboardEvent(event){// Make sure that the key pressed is not a modifier key.
// getModifierState is not being used, as it is not available in Safari
// earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
if(-1!==this._MODIFIER_KEYS.indexOf(event.key))return;this.cancelDebouncer("_clearSearchText");var searchText=this._searchText||"",key=event.key&&1==event.key.length?event.key:String.fromCharCode(event.keyCode);searchText+=key.toLocaleLowerCase();for(var searchLength=searchText.length,i=0,item;item=this.items[i];i++){if(item.hasAttribute("disabled")){continue}var attr=this.attrForItemTitle||"textContent",title=(item[attr]||item.getAttribute(attr)||"").trim();if(title.length<searchLength){continue}if(title.slice(0,searchLength).toLocaleLowerCase()==searchText){this._setFocusedItem(item);break}}this._searchText=searchText;this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)},_clearSearchText:function _clearSearchText(){this._searchText=""},/**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */_focusPrevious:function _focusPrevious(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex-i+length)%length];if(!item.hasAttribute("disabled")){var owner=(0,_vaadinApp.dom)(item).getOwnerRoot()||document;this._setFocusedItem(item);// Focus might not have worked, if the element was hidden or not
// focusable. In that case, try again.
if((0,_vaadinApp.dom)(owner).activeElement==item){return}}}},/**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */_focusNext:function _focusNext(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex+i)%length];if(!item.hasAttribute("disabled")){var owner=(0,_vaadinApp.dom)(item).getOwnerRoot()||document;this._setFocusedItem(item);// Focus might not have worked, if the element was hidden or not
// focusable. In that case, try again.
if((0,_vaadinApp.dom)(owner).activeElement==item){return}}}},/**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param {Element} item An item in the menu.
   * @param {boolean} isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */_applySelection:function _applySelection(item,isSelected){if(isSelected){item.setAttribute("aria-selected","true")}else{item.setAttribute("aria-selected","false")}IronSelectableBehavior._applySelection.apply(this,arguments)},/**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param {Element} focusedItem The element that is currently focused.
   * @param {?Element} old The last element that was considered focused, if
   * applicable.
   */_focusedItemChanged:function _focusedItemChanged(focusedItem,old){old&&old.setAttribute("tabindex","-1");if(focusedItem&&!focusedItem.hasAttribute("disabled")&&!this.disabled){focusedItem.setAttribute("tabindex","0");focusedItem.focus()}},/**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param {CustomEvent} event An event containing mutation records as its
   * detail.
   */_onIronItemsChanged:function _onIronItemsChanged(event){if(event.detail.addedNodes.length){this._resetTabindices()}},/**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute("tabindex");IronMenuBehaviorImpl._shiftTabPressed=!0;this._setFocusedItem(null);this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);IronMenuBehaviorImpl._shiftTabPressed=!1;// NOTE(cdata): polymer/polymer#1305
},1)},/**
   * Handler that is called when the menu receives focus.
   *
   * @param {FocusEvent} event A focus event.
   */_onFocus:function _onFocus(event){if(IronMenuBehaviorImpl._shiftTabPressed){// do not focus the menu itself
return}// Do not focus the selected tab if the deepest target is part of the
// menu element's local DOM and is focusable.
var rootTarget=/** @type {?HTMLElement} */(0,_vaadinApp.dom)(event).rootTarget;if(rootTarget!==this&&"undefined"!==typeof rootTarget.tabIndex&&!this.isLightDescendant(rootTarget)){return}// clear the cached focus item
this._defaultFocusAsync=this.async(function(){// focus the selected item when the menu receives focus, or the first item
// if no item is selected
var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null);if(firstSelectedItem){this._setFocusedItem(firstSelectedItem)}else if(this.items[0]){// We find the first none-disabled item (if one exists)
this._focusNext()}})},/**
   * Handler that is called when the up key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */_onUpKey:function _onUpKey(event){// up and down arrows moves the focus
this._focusPrevious();event.detail.keyboardEvent.preventDefault()},/**
   * Handler that is called when the down key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */_onDownKey:function _onDownKey(event){this._focusNext();event.detail.keyboardEvent.preventDefault()},/**
   * Handler that is called when the esc key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */_onEscKey:function _onEscKey(event){var focusedItem=this.focusedItem;if(focusedItem){focusedItem.blur()}},/**
   * Handler that is called when a keydown event is detected.
   *
   * @param {KeyboardEvent} event A keyboard event.
   */_onKeydown:function _onKeydown(event){if(!this.keyboardEventMatchesKeys(event,"up down esc")){// all other keys focus the menu item starting with that character
this._focusWithKeyboardEvent(event)}event.stopPropagation()},// override _activateHandler
_activateHandler:function _activateHandler(event){IronSelectableBehavior._activateHandler.call(this,event);event.stopPropagation()},/**
   * Updates this element's tab index when it's enabled/disabled.
   * @param {boolean} disabled
   */_disabledChanged:function _disabledChanged(disabled){if(disabled){this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0;this.removeAttribute("tabindex");// No tabindex means not tab-able or select-able.
}else if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex",this._previousTabIndex)}}};_exports.IronMenuBehaviorImpl=IronMenuBehaviorImpl;IronMenuBehaviorImpl._shiftTabPressed=!1;/** @polymerBehavior */var IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];_exports.IronMenuBehavior=IronMenuBehavior;var ironMenuBehavior={IronMenuBehaviorImpl:IronMenuBehaviorImpl,IronMenuBehavior:IronMenuBehavior};_exports.$ironMenuBehavior=ironMenuBehavior;var NeonAnimationBehavior={properties:{/**
     * Defines the animation timing.
     */animationTiming:{type:Object,value:function value(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},/**
   * Can be used to determine that elements implement this behavior.
   */isNeonAnimation:!0,/**
   * Do any animation configuration here.
   */ // configure: function(config) {
// },
created:function created(){if(!document.body.animate){console.warn("No web animations detected. This element will not"+" function without a web animations polyfill.")}},/**
   * Returns the animation timing by mixing in properties from `config` to the
   * defaults defined by the animation.
   */timingFromConfig:function timingFromConfig(config){if(config.timing){for(var property in config.timing){this.animationTiming[property]=config.timing[property]}}return this.animationTiming},/**
   * Sets `transform` and `transformOrigin` properties along with the prefixed
   * versions.
   */setPrefixedProperty:function setPrefixedProperty(node,property,value){for(var map={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},prefixes=map[property],prefix,index=0;prefix=prefixes[index];index++){node.style[prefix]=value}node.style[property]=value},/**
   * Called when the animation finishes.
   */complete:function complete(config){}};_exports.NeonAnimationBehavior=NeonAnimationBehavior;var neonAnimationBehavior={NeonAnimationBehavior:NeonAnimationBehavior};_exports.$neonAnimationBehavior=neonAnimationBehavior;(0,_vaadinApp.Polymer)({is:"fade-in-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(config));return this._effect}});(0,_vaadinApp.Polymer)({is:"fade-out-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(config));return this._effect}});var template$2=(0,_vaadinApp.html)(_templateObject9_f4bde900d04c11ea9be8ed19ce1a2128());template$2.setAttribute("style","display: none;");document.head.appendChild(template$2.content);var template$3=(0,_vaadinApp.html)(_templateObject10_f4bde900d04c11ea9be8ed19ce1a2128());template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);var template$4=(0,_vaadinApp.html)(_templateObject11_f4bde900d04c11ea9be8ed19ce1a2128());template$4.setAttribute("style","display: none;");document.head.appendChild(template$4.content);(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject12_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-badge",/** @private */hostAttributes:{role:"status",tabindex:0},behaviors:[_vaadinApp.IronResizableBehavior],listeners:{"iron-resize":"updatePosition"},properties:{/**
     * The id of the element that the badge is anchored to. This element
     * must be a sibling of the badge.
     */for:{type:String,observer:"_forChanged"},/**
     * The label displayed in the badge. The label is centered, and ideally
     * should have very few characters.
     */label:{type:String,observer:"_labelChanged"},/**
     * An iron-icon ID. When given, the badge content will use an
     * `<iron-icon>` element displaying the given icon ID rather than the
     * label text. However, the label text will still be used for
     * accessibility purposes.
     */icon:{type:String,value:""},_boundNotifyResize:{type:Function,value:function value(){return this.notifyResize.bind(this)}},_boundUpdateTarget:{type:Function,value:function value(){return this._updateTarget.bind(this)}}},/** @override */attached:function attached(){// Polymer 2.x does not have this.offsetParent defined by attached
requestAnimationFrame(this._boundUpdateTarget)},/** @override */attributeChanged:function attributeChanged(name){if("hidden"===name){this.updatePosition()}},_forChanged:function _forChanged(){// The first time the property is set is before the badge is attached,
// which means we're not ready to position it yet.
if(!this.isAttached){return}this._updateTarget()},_labelChanged:function _labelChanged(){this.setAttribute("aria-label",this.label)},_updateTarget:function _updateTarget(){this._target=this.target;requestAnimationFrame(this._boundNotifyResize)},_computeIsIconBadge:function _computeIsIconBadge(icon){return 0<icon.length},/**
   * Returns the target element that this badge is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the badge.
   */get target(){var parentNode=(0,_vaadinApp.dom)(this).parentNode,ownerRoot=(0,_vaadinApp.dom)(this).getOwnerRoot(),target;// If the parentNode is a document fragment, then we need to use the host.
if(this.for){target=(0,_vaadinApp.dom)(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},/**
   * Repositions the badge relative to its anchor element. This is called
   * automatically when the badge is attached or an `iron-resize` event is
   * fired (for exmaple if the window has resized, or your target is a
   * custom element that implements IronResizableBehavior).
   *
   * You should call this in all other cases when the achor's position
   * might have changed (for example, if it's visibility has changed, or
   * you've manually done a page re-layout).
   */updatePosition:function updatePosition(){if(!this._target||!this.offsetParent){return}var parentRect=this.offsetParent.getBoundingClientRect(),targetRect=this._target.getBoundingClientRect(),thisRect=this.getBoundingClientRect();this.style.left=targetRect.left-parentRect.left+(targetRect.width-thisRect.width/2)+"px";this.style.top=targetRect.top-parentRect.top-thisRect.height/2+"px"}});var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
    * @param {HTMLElement} element
    * @constructor
    */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight)}};/**
    * @param {HTMLElement} element
    * @constructor
    */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");(0,_vaadinApp.dom)(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,2*(this.radius/this.containerMetrics.size)/Math.sqrt(2))},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function draw(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function remove(){(0,_vaadinApp.dom)((0,_vaadinApp.dom)(this.waveContainer).parentNode).removeChild(this.waveContainer)}};/**
   Material design: [Surface
   reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
   
   `paper-ripple` provides a visual effect that other paper elements can
   use to simulate a rippling effect emanating from the point of contact.  The
   effect can be visualized as a concentric circle with motion.
   
   Example:
   
       <div style="position:relative">
         <paper-ripple></paper-ripple>
       </div>
   
   Note, it's important that the parent container of the ripple be relative
   position, otherwise the ripple will emanate outside of the desired container.
   
   `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
   ripple effect when touches on it.  You can also defeat the default behavior and
   manually route the down and up actions to the ripple element.  Note that it is
   important if you call `downAction()` you will have to make sure to call
   `upAction()` so that `paper-ripple` would end the animation loop.
   
   Example:
   
       <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
       ...
       downAction: function(e) {
         this.$.ripple.downAction(e.detail);
       },
       upAction: function(e) {
         this.$.ripple.upAction();
       }
   
   Styling ripple effect:
   
     Use CSS color property to style the ripple:
   
       paper-ripple {
         color: #4285f4;
       }
   
     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.
   
   By default, the ripple is centered on the point of contact.  Apply the
   `recenters` attribute to have the ripple grow toward the center of its
   container.
   
       <paper-ripple recenters></paper-ripple>
   
   You can also  center the ripple inside its container from the start.
   
       <paper-ripple center></paper-ripple>
   
   Apply `circle` class to make the rippling effect within a circle.
   
       <paper-ripple class="circle"></paper-ripple>
   
   @element paper-ripple
   @demo demo/index.html
   */(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject13_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:!1},/**
     * If true, ripples will center inside its container
     *
     * @type boolean
     * @default false
     */center:{type:Boolean,value:!1},/**
     * A list of the visual ripples.
     *
     * @type Array
     * @default []
     */ripples:{type:Array,value:function value(){return[]}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},/** @override */attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(11==(0,_vaadinApp.dom)(this).parentNode.nodeType){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=(0,_vaadinApp.dom)(this).getOwnerRoot().host}else{this.keyEventTarget=(0,_vaadinApp.dom)(this).parentNode}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},/** @override */detached:function detached(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction()},1)},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event)}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function downAction(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event)}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function upAction(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function onAnimationComplete(){this._animating=!1;this.$.background.style.backgroundColor="";this.fire("transitionend")},addRipple:function addRipple(){var ripple=new Ripple(this);(0,_vaadinApp.dom)(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   * @override
   */animate:function animate(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function animateRipple(){return this.animate()},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction()},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction()},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});var PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:"_noinkChanged"},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple()}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){(0,_vaadinApp.dom)(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=(0,_vaadinApp.dom)(this._rippleContainer||this),target=(0,_vaadinApp.dom)(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function getRipple(){this.ensureRipple();return this._ripple},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function hasRipple(){return!!this._ripple},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement("paper-ripple");return element},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;var PaperButtonBehaviorImpl={properties:{/**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function _calculateElevation(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function _computeKeyboardClass(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},/**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);// Ensure that there is at most one ripple when the space key is held down.
if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},/**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};/** @polymerBehavior */_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;var PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};_exports.$paperButtonBehavior=paperButtonBehavior;var template$5=(0,_vaadinApp.html)(_templateObject14_f4bde900d04c11ea9be8ed19ce1a2128());template$5.setAttribute("style","display: none;");document.head.appendChild(template$5.content);var template$6=(0,_vaadinApp.html)(_templateObject15_f4bde900d04c11ea9be8ed19ce1a2128());template$6.setAttribute("style","display: none;");document.head.appendChild(template$6.content);var template$7=(0,_vaadinApp.html$1)(_templateObject16_f4bde900d04c11ea9be8ed19ce1a2128());template$7.setAttribute("strip-whitespace","");/**
                                                 Material design:
                                                 [Buttons](https://www.google.com/design/spec/components/buttons.html)
                                                                                               `paper-button` is a button. When the user touches the button, a ripple effect
                                                 emanates from the point of contact. It may be flat or raised. A raised button is
                                                 styled with a shadow.
                                                                                               Example:
                                                                                                   <paper-button>Flat button</paper-button>
                                                   <paper-button raised>Raised button</paper-button>
                                                   <paper-button noink>No ripple effect</paper-button>
                                                   <paper-button toggles>Toggle-able button</paper-button>
                                                                                               A button that has `toggles` true will remain `active` after being clicked (and
                                                 will have an `active` attribute set). For more information, see the
                                                 `IronButtonState` behavior.
                                                                                               You may use custom DOM in the button body to create a variety of buttons. For
                                                 example, to create a button with an icon and some text:
                                                                                                   <paper-button>
                                                     <iron-icon icon="favorite"></iron-icon>
                                                     custom button content
                                                   </paper-button>
                                                                                               To use `paper-button` as a link, wrap it in an anchor tag. Since `paper-button`
                                                 will already receive focus, you may want to prevent the anchor tag from
                                                 receiving focus as well by setting its tabindex to -1.
                                                                                                   <a href="https://www.polymer-project.org/" tabindex="-1">
                                                     <paper-button raised>Polymer Project</paper-button>
                                                   </a>
                                                                                               ### Styling
                                                                                               Style the button with CSS as you would a normal DOM element.
                                                                                                   paper-button.fancy {
                                                     background: green;
                                                     color: yellow;
                                                   }
                                                                                                   paper-button.fancy:hover {
                                                     background: lime;
                                                   }
                                                                                                   paper-button[disabled],
                                                   paper-button[toggles][active] {
                                                     background: red;
                                                   }
                                                                                               By default, the ripple is the same color as the foreground at 25% opacity. You
                                                 may customize the color using the `--paper-button-ink-color` custom property.
                                                                                               The following custom properties and mixins are also available for styling:
                                                                                               Custom property | Description | Default
                                                 ----------------|-------------|----------
                                                 `--paper-button-ink-color` | Background color of the ripple | `Based on the button's color`
                                                 `--paper-button` | Mixin applied to the button | `{}`
                                                 `--paper-button-disabled` | Mixin applied to the disabled button. Note that you can also use the `paper-button[disabled]` selector | `{}`
                                                 `--paper-button-flat-keyboard-focus` | Mixin applied to a flat button after it's been focused using the keyboard | `{}`
                                                 `--paper-button-raised-keyboard-focus` | Mixin applied to a raised button after it's been focused using the keyboard | `{}`
                                                                                               @demo demo/index.html
                                                 */(0,_vaadinApp.Polymer)({_template:template$7,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{/**
     * If true, the button should be styled with a shadow.
     */raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function _calculateElevation(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    Event param: {{node: Object}} detail Contains the animated node.
    */});(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject17_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-card",properties:{/**
     * The title of the card.
     */heading:{type:String,value:"",observer:"_headingChanged"},/**
     * The url of the title image of the card.
     */image:{type:String,value:""},/**
     * The text alternative of the card's title image.
     */alt:{type:String},/**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */preloadImage:{type:Boolean,value:!1},/**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */fadeImage:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholderImage:{type:String,value:null},/**
     * The z-depth of the card, from 0-5.
     */elevation:{type:Number,value:1,reflectToAttribute:!0},/**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */animatedShadow:{type:Boolean,value:!1},/**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},/**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */_isHidden:function _isHidden(image){return image?"false":"true"},_headingChanged:function _headingChanged(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function _computeHeadingClass(image){return image?" over-image":""},_computeAnimated:function _computeAnimated(animatedShadow){return animatedShadow}});var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<iron-iconset-svg name=\"paper-dropdown-menu\" size=\"24\">\n<svg><defs>\n<g id=\"arrow-drop-down\"><path d=\"M7 10l5 5 5-5z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>";document.head.appendChild($_documentContainer.content);var $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML="<dom-module id=\"paper-dropdown-menu-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$1.content);var PaperInputAddonBehavior={attached:function attached(){this.fire("addon-attached")},/**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){}};_exports.PaperInputAddonBehavior=PaperInputAddonBehavior;var paperInputAddonBehavior={PaperInputAddonBehavior:PaperInputAddonBehavior};_exports.$paperInputAddonBehavior=paperInputAddonBehavior;(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject18_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-input-char-counter",behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:"0"}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){if(!state.inputElement){return}state.value=state.value||"";var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute("maxlength")){counter+="/"+state.inputElement.getAttribute("maxlength")}this._charCounterStr=counter}});var template$8=(0,_vaadinApp.html)(_templateObject19_f4bde900d04c11ea9be8ed19ce1a2128());template$8.setAttribute("style","display: none;");document.head.appendChild(template$8.content);/*
                                               `<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
                                               `<textarea>` and optional add-on elements such as an error message or character
                                               counter, used to implement Material Design text fields.
                                                                                           For example:
                                                                                               <paper-input-container>
                                                   <label slot="label">Your name</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above.
                                                 </paper-input-container>
                                                                                           You can style the nested `<input>` however you want; if you want it to look like
                                               a Material Design input, you can style it with the
                                               --paper-input-container-shared-input-style mixin.
                                                                                           Do not wrap `<paper-input-container>` around elements that already include it,
                                               such as `<paper-input>`. Doing so may cause events to bounce infinitely between
                                               the container and its contained element.
                                                                                           ### Listening for input changes
                                                                                           By default, it listens for changes on the `bind-value` attribute on its children
                                               nodes and perform tasks such as auto-validating and label styling when the
                                               `bind-value` changes. You can configure the attribute it listens to with the
                                               `attr-for-value` attribute.
                                                                                           ### Using a custom input element
                                                                                           You can use a custom input element in a `<paper-input-container>`, for example
                                               to implement a compound input field like a social security number input. The
                                               custom input element should have the `paper-input-input` class, have a
                                               `notify:true` value property and optionally implements
                                               `Polymer.IronValidatableBehavior` if it is validatable.
                                                                                               <paper-input-container attr-for-value="ssn-value">
                                                   <label slot="label">Social security number</label>
                                                   <ssn-input slot="input" class="paper-input-input"></ssn-input>
                                                 </paper-input-container>
                                                                                           
                                               If you're using a `<paper-input-container>` imperatively, it's important to make
                                               sure that you attach its children (the `iron-input` and the optional `label`)
                                               before you attach the `<paper-input-container>` itself, so that it can be set up
                                               correctly.
                                                                                           ### Validation
                                                                                           If the `auto-validate` attribute is set, the input container will validate the
                                               input and update the container styling when the input value changes.
                                                                                           ### Add-ons
                                                                                           Add-ons are child elements of a `<paper-input-container>` with the `add-on`
                                               attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
                                               are notified when the input value or validity changes, and may implement
                                               functionality such as error messages or character counters. They appear at the
                                               bottom of the input.
                                                                                           ### Prefixes and suffixes
                                               These are child elements of a `<paper-input-container>` with the `prefix`
                                               or `suffix` attribute, and are displayed inline with the input, before or after.
                                                                                               <paper-input-container>
                                                   <div slot="prefix">$</div>
                                                   <label slot="label">Total</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above. <paper-icon-button slot="suffix"
                                               icon="clear"></paper-icon-button>
                                                 </paper-input-container>
                                                                                           ### Styling
                                                                                           The following custom properties and mixins are available for styling:
                                                                                           Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
                                               `--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
                                               `--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
                                               `--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
                                               `--paper-input-container` | Mixin applied to the container | `{}`
                                               `--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
                                               `--paper-input-container-label` | Mixin applied to the label | `{}`
                                               `--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
                                               `--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
                                               `--paper-input-container-input` | Mixin applied to the input | `{}`
                                               `--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
                                               `--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
                                               `--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
                                               `--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
                                               `--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
                                               `--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
                                               `--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
                                               `--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
                                               `--paper-input-container-underline` | Mixin applied to the underline | `{}`
                                               `--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
                                               `--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
                                               `--paper-input-prefix` | Mixin applied to the input prefix | `{}`
                                               `--paper-input-suffix` | Mixin applied to the input suffix | `{}`
                                               `--paper-input-container-label-before` | Mixin applied to label before pseudo element | {}
                                               `--paper-input-container-label-after` | Mixin applied to label after pseudo element (useful for required asterisk) | {}
                                                                                           This element is `display:block` by default, but you can set the `inline`
                                               attribute to make it `display:inline-block`.
                                               */(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject20_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-input-container",properties:{/**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the floating label.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * The attribute to listen for value changes on.
     */attrForValue:{type:String,value:"bind-value"},/**
     * Set to true to auto-validate the input value when it changes.
     */autoValidate:{type:Boolean,value:!1},/**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */invalid:{observer:"_invalidChanged",type:Boolean,value:!1},/**
     * True if the input has focus.
     */focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array// do not set a default value here intentionally - it will be initialized
// lazily when a distributed child is attached, which may occur before
// configuration for this element in polyfill.
},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function value(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function value(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function value(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function value(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return(0,_vaadinApp.dashToCamelCase)(this.attrForValue)},get _inputElement(){return(0,_vaadinApp.dom)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},/** @override */ready:function ready(){// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. We need to track whether the first time we
// encounter the value is basically this first time, so that we can validate
// it correctly the rest of the time. See
// https://github.com/PolymerElements/paper-input/issues/605
this.__isFirstValueUpdate=!0;if(!this._addons){this._addons=[]}this.addEventListener("focus",this._boundOnFocus,!0);this.addEventListener("blur",this._boundOnBlur,!0)},/** @override */attached:function attached(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged)}else{this.addEventListener("input",this._onInput)}// Only validate when attached if the input already has a value.
if(this._inputElementValue&&""!=this._inputElementValue){this._handleValueAndAutoValidate(this._inputElement)}else{this._handleValue(this._inputElement)}},/** @private */_onAddonAttached:function _onAddonAttached(event){if(!this._addons){this._addons=[]}var target=event.target;if(-1===this._addons.indexOf(target)){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement)}}},/** @private */_onFocus:function _onFocus(){this._setFocused(!0)},/** @private */_onBlur:function _onBlur(){this._setFocused(!1);this._handleValueAndAutoValidate(this._inputElement)},/** @private */_onInput:function _onInput(event){this._handleValueAndAutoValidate(event.target)},/** @private */_onValueChanged:function _onValueChanged(event){var input=event.target;// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. If this is in fact the bootup case, ignore
// validation, just this once.
if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=!1;if(input.value===void 0||""===input.value){return}}this._handleValueAndAutoValidate(event.target)},/** @private */_handleValue:function _handleValue(inputElement){var value=this._inputElementValue;// type="number" hack needed because this.value is empty until it's valid
if(value||0===value||"number"===inputElement.type&&!inputElement.checkValidity()){this._inputHasContent=!0}else{this._inputHasContent=!1}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid})},/** @private */_handleValueAndAutoValidate:function _handleValueAndAutoValidate(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue)}else{valid=inputElement.checkValidity()}this.invalid=!valid}// Call this last to notify the add-ons.
this._handleValue(inputElement)},/** @private */_onIronInputValidate:function _onIronInputValidate(event){this.invalid=this._inputElement.invalid},/** @private */_invalidChanged:function _invalidChanged(){if(this._addons){this.updateAddons({invalid:this.invalid})}},/**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */updateAddons:function updateAddons(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state)}},/** @private */_computeInputContentClass:function _computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls="input-content";if(!noLabelFloat){var label=this.querySelector("label");if(alwaysFloatLabel||_inputHasContent){cls+=" label-is-floating";// If the label is floating, ignore any offsets that may have been
// applied from a prefix element.
this.$.labelAndInputContainer.style.position="static";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" label-is-highlighted"}}else{// When the label is not floating, it should overlap the input element.
if(label){this.$.labelAndInputContainer.style.position="relative"}if(invalid){cls+=" is-invalid"}}}else{if(_inputHasContent){cls+=" label-is-hidden"}if(invalid){cls+=" is-invalid"}}if(focused){cls+=" focused"}return cls},/** @private */_computeUnderlineClass:function _computeUnderlineClass(focused,invalid){var cls="underline";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls},/** @private */_computeAddOnContentClass:function _computeAddOnContentClass(focused,invalid){var cls="add-on-content";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls}});(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject21_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-input-error",behaviors:[PaperInputAddonBehavior],properties:{/**
     * True if the error is showing.
     */invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){this._setInvalid(state.invalid)}});// aria-labelledby) and add-ons.
var PaperInputHelper={};_exports.PaperInputHelper=PaperInputHelper;PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;/**
                                   * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
                                   * This behavior is implemented by `<paper-input>`. It exposes a number of
                                   * properties from `<paper-input-container>` and `<input is="iron-input">` and
                                   * they should be bound in your template.
                                   *
                                   * The input element can be accessed by the `inputElement` property if you need
                                   * to access properties or methods that are not exposed.
                                   * @polymerBehavior PaperInputBehavior
                                   */var PaperInputBehaviorImpl={properties:{/**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */ /**
         * The label for this input. If you're using PaperInputBehavior to
         * implement your own paper-input-like element, bind this to
         * `<label>`'s content and `hidden` property, e.g.
         * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
         */label:{type:String},/**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */value:{notify:!0,type:String},/**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */disabled:{type:Boolean,value:!1},/**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */invalid:{type:Boolean,value:!1,notify:!0},/**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */allowedPattern:{type:String},/**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */type:{type:String},/**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */list:{type:String},/**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */pattern:{type:String},/**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */required:{type:Boolean,value:!1},/**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */errorMessage:{type:String},/**
     * Set to true to show a character counter.
     */charCounter:{type:Boolean,value:!1},/**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */autoValidate:{type:Boolean,value:!1},/**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */validator:{type:String},// HTMLInputElement attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */autocomplete:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     *
     * @type {!boolean}
     */autofocus:{type:Boolean,observer:"_autofocusChanged"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */inputmode:{type:String},/**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */minlength:{type:Number},/**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */maxlength:{type:Number},/**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */min:{type:String},/**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */max:{type:String},/**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */step:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */name:{type:String},/**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */placeholder:{type:String,// need to set a default so _computeAlwaysFloatLabel is run
value:""},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */readonly:{type:Boolean,value:!1},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */size:{type:Number},// Nonstandard attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */autocapitalize:{type:String,value:"none"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */autocorrect:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */autosave:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */results:{type:Number},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */accept:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */multiple:{type:Boolean},/** @private */_ariaDescribedBy:{type:String,value:""},/** @private */_ariaLabelledBy:{type:String,value:""},/** @private */_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},/**
   * @type {!Object}
   */keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},/** @private */hostAttributes:{tabindex:0},/**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */get inputElement(){// Chrome generates audit errors if an <input type="password"> has a
// duplicate ID, which is almost always true in Shady DOM. Generate
// a unique ID instead.
if(!this.$){this.$={}}if(!this.$.input){this._generateInputId();this.$.input=this.$$("#"+this._inputId)}return this.$.input},/**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement},/** @override */created:function created(){// These types have some default placeholder text; overlapping
// the label on top of it looks terrible. Auto-float the label in this case.
this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},/** @override */attached:function attached(){this._updateAriaLabelledBy();// In the 2.0 version of the element, this is handled in `onIronInputReady`,
// i.e. after the native input has finished distributing. In the 1.0
// version, the input is in the shadow tree, so it's already available.
if(!_vaadinApp.PolymerElement&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)){this.alwaysFloatLabel=!0}},_appendStringWithSpace:function _appendStringWithSpace(str,more){if(str){str=str+" "+more}else{str=more}return str},_onAddonAttached:function _onAddonAttached(event){var target=(0,_vaadinApp.dom)(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id)}else{var id="paper-input-add-on-"+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id)}},/**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */validate:function validate(){return this.inputElement.validate()},/**
   * Forward focus to inputElement. Overriden from IronControlState.
   */_focusBlurHandler:function _focusBlurHandler(event){IronControlState._focusBlurHandler.call(this,event);// Forward the focus to the nested input.
if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus()}},/**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute("tabindex");this._shiftTabPressed=!0;this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);this._shiftTabPressed=!1},1)},/**
   * If `autoValidate` is true, then validates the element.
   */_handleAutoValidate:function _handleAutoValidate(){if(this.autoValidate)this.validate()},/**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */updateValueAndPreserveCaret:function updateValueAndPreserveCaret(newValue){// Not all elements might have selection, and even if they have the
// right properties, accessing them might throw an exception (like for
// <input type=number>)
try{var start=this.inputElement.selectionStart;this.value=newValue;// The cursor automatically jumps to the end after re-setting the value,
// so restore it to its original position.
this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start}catch(e){// Just set the value and give up on the caret.
this.value=newValue}},_computeAlwaysFloatLabel:function _computeAlwaysFloatLabel(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel},_updateAriaLabelledBy:function _updateAriaLabelledBy(){var label=(0,_vaadinApp.dom)(this.root).querySelector("label");if(!label){this._ariaLabelledBy="";return}var labelledBy;if(label.id){labelledBy=label.id}else{labelledBy="paper-input-label-"+PaperInputHelper.NextLabelID++;label.id=labelledBy}this._ariaLabelledBy=labelledBy},_generateInputId:function _generateInputId(){if(!this._inputId||""===this._inputId){this._inputId="input-"+PaperInputHelper.NextInputID++}},_onChange:function _onChange(event){// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
// See
// https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}},_autofocusChanged:function _autofocusChanged(){// Firefox doesn't respect the autofocus attribute if it's applied after
// the page is loaded (Chrome/WebKit do respect it), preventing an
// autofocus attribute specified in markup from taking effect when the
// element is upgraded. As a workaround, if the autofocus property is set,
// and the focus hasn't already been moved elsewhere, we take focus.
if(this.autofocus&&this._focusableElement){// In IE 11, the default document.activeElement can be the page's
// outermost html element, but there are also cases (under the
// polyfill?) in which the activeElement is not a real HTMLElement, but
// just a plain object. We identify the latter case as having no valid
// activeElement.
var activeElement=document.activeElement,isActiveElementValid=babelHelpers.instanceof(activeElement,HTMLElement),isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;/* IE 11 */if(!isSomeElementActive){// No specific element has taken the focus yet, so we can take it.
this._focusableElement.focus()}}}};/** @polymerBehavior */_exports.PaperInputBehaviorImpl=PaperInputBehaviorImpl;var PaperInputBehavior=[IronControlState,IronA11yKeysBehavior,PaperInputBehaviorImpl];_exports.PaperInputBehavior=PaperInputBehavior;var paperInputBehavior={PaperInputHelper:PaperInputHelper,PaperInputBehaviorImpl:PaperInputBehaviorImpl,PaperInputBehavior:PaperInputBehavior};_exports.$paperInputBehavior=paperInputBehavior;(0,_vaadinApp.Polymer)({is:"paper-input",/** @override */_template:(0,_vaadinApp.html)(_templateObject22_f4bde900d04c11ea9be8ed19ce1a2128()),behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{// Required for the correct TypeScript type-generation
type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},/**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement._inputElement},// Note: This event is only available in the 1.0 version of this element.
// In 2.0, the functionality of `_onIronInputReady` is done in
// PaperInputBehavior::attached.
listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function _onIronInputReady(){// Even though this is only used in the next line, save this for
// backwards compatibility, since the native input had this ID until 2.0.5.
if(!this.$.nativeInput){this.$.nativeInput=/** @type {!Element} */this.$$("input")}if(this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)){this.alwaysFloatLabel=!0}// Only validate when attached if the input already has a value.
if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement)}}});(0,_vaadinApp.Polymer)({is:"paper-menu-grow-height-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this._effect=new KeyframeEffect(node,[{height:height/2+"px"},{height:height+"px"}],this.timingFromConfig(config));return this._effect}});(0,_vaadinApp.Polymer)({is:"paper-menu-grow-width-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width/2+"px"},{width:width+"px"}],this.timingFromConfig(config));return this._effect}});(0,_vaadinApp.Polymer)({is:"paper-menu-shrink-width-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width+"px"},{width:width-width/20+"px"}],this.timingFromConfig(config));return this._effect}});(0,_vaadinApp.Polymer)({is:"paper-menu-shrink-height-animation",behaviors:[NeonAnimationBehavior],configure:function configure(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this.setPrefixedProperty(node,"transformOrigin","0 0");this._effect=new KeyframeEffect(node,[{height:height+"px",transform:"translateY(0)"},{height:height/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(config));return this._effect}});var config={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400},PaperMenuButton=(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject23_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-menu-button",/**
   * Fired when the dropdown opens.
   *
   * @event paper-dropdown-open
   */ /**
       * Fired when the dropdown closes.
       *
       * @event paper-dropdown-close
       */behaviors:[IronA11yKeysBehavior,IronControlState],properties:{/**
     * True if the content is currently displayed.
     */opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},/**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},/**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */verticalAlign:{type:String,value:"top",reflectToAttribute:!0},/**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */dynamicAlign:{type:Boolean},/**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`. Use a negative value to offset to the
     * left, or a positive value to offset to the right.
     */horizontalOffset:{type:Number,value:0,notify:!0},/**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`. Use a negative value to offset towards the
     * top, or a positive value to offset towards the bottom.
     */verticalOffset:{type:Number,value:0,notify:!0},/**
     * If true, the dropdown will be positioned so that it doesn't overlap
     * the button.
     */noOverlap:{type:Boolean},/**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */noAnimations:{type:Boolean,value:!1},/**
     * Set to true to disable automatically closing the dropdown after
     * a selection has been made.
     */ignoreSelect:{type:Boolean,value:!1},/**
     * Set to true to enable automatically closing the dropdown after an
     * item has been activated, even if the selection did not change.
     */closeOnActivate:{type:Boolean,value:!1},/**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown.
     */openAnimationConfig:{type:Object,value:function value(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:config.ANIMATION_CUBIC_BEZIER}}]}},/**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown.
     */closeAnimationConfig:{type:Object,value:function value(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},/**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */allowOutsideScroll:{type:Boolean,value:!1},/**
     * Whether focus should be restored to the button when the menu closes.
     */restoreFocusOnClose:{type:Boolean,value:!0},/**
     * This is the element intended to be bound as the focus target
     * for the `iron-dropdown` contained by `paper-menu-button`.
     */_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},/**
   * The content element that is contained by the menu button, if any.
   */get contentElement(){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
for(var nodes=(0,_vaadinApp.dom)(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},/**
   * Toggles the dropdown content between opened and closed.
   */toggle:function toggle(){if(this.opened){this.close()}else{this.open()}},/**
   * Make the dropdown content appear as an overlay positioned relative
   * to the dropdown trigger.
   */open:function open(){if(this.disabled){return}this.$.dropdown.open()},/**
   * Hide the dropdown content.
   */close:function close(){this.$.dropdown.close()},/**
   * When an `iron-select` event is received, the dropdown should
   * automatically close on the assumption that a value has been chosen.
   *
   * @param {CustomEvent} event A CustomEvent instance with type
   * set to `"iron-select"`.
   */_onIronSelect:function _onIronSelect(event){if(!this.ignoreSelect){this.close()}},/**
   * Closes the dropdown when an `iron-activate` event is received if
   * `closeOnActivate` is true.
   *
   * @param {CustomEvent} event A CustomEvent of type 'iron-activate'.
   */_onIronActivate:function _onIronActivate(event){if(this.closeOnActivate){this.close()}},/**
   * When the dropdown opens, the `paper-menu-button` fires `paper-open`.
   * When the dropdown closes, the `paper-menu-button` fires `paper-close`.
   *
   * @param {boolean} opened True if the dropdown is opened, otherwise false.
   * @param {boolean} oldOpened The previous value of `opened`.
   */_openedChanged:function _openedChanged(opened,oldOpened){if(opened){// TODO(cdata): Update this when we can measure changes in distributed
// children in an idiomatic way.
// We poke this property in case the element has changed. This will
// cause the focus target for the `iron-dropdown` to be updated as
// necessary:
this._dropdownContent=this.contentElement;this.fire("paper-dropdown-open")}else if(null!=oldOpened){this.fire("paper-dropdown-close")}},/**
   * If the dropdown is open when disabled becomes true, close the
   * dropdown.
   *
   * @param {boolean} disabled True if disabled, otherwise false.
   */_disabledChanged:function _disabledChanged(disabled){IronControlState._disabledChanged.apply(this,arguments);if(disabled&&this.opened){this.close()}},__onIronOverlayCanceled:function __onIronOverlayCanceled(event){var uiEvent=event.detail,trigger=this.$.trigger,path=(0,_vaadinApp.dom)(uiEvent).path;if(-1<path.indexOf(trigger)){event.preventDefault()}}});/**
   Material design: [Dropdown
   buttons](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)
   
   `paper-menu-button` allows one to compose a designated "trigger" element with
   another element that represents "content", to create a dropdown menu that
   displays the "content" when the "trigger" is clicked.
   
   The child element assigned to the `dropdown-trigger` slot will be used as the
   "trigger" element. The child element assigned to the `dropdown-content` slot
   will be used as the "content" element.
   
   The `paper-menu-button` is sensitive to its content's `iron-select` events. If
   the "content" element triggers an `iron-select` event, the `paper-menu-button`
   will close automatically.
   
   Example:
   
       <paper-menu-button>
         <paper-icon-button icon="menu"
   slot="dropdown-trigger"></paper-icon-button> <paper-listbox
   slot="dropdown-content"> <paper-item>Share</paper-item>
           <paper-item>Settings</paper-item>
           <paper-item>Help</paper-item>
         </paper-listbox>
       </paper-menu-button>
   
   ### Styling
   
   The following custom properties and mixins are also available for styling:
   
   Custom property | Description | Default
   ----------------|-------------|----------
   `--paper-menu-button-dropdown-background` | Background color of the paper-menu-button dropdown | `--primary-background-color`
   `--paper-menu-button` | Mixin applied to the paper-menu-button | `{}`
   `--paper-menu-button-disabled` | Mixin applied to the paper-menu-button when disabled | `{}`
   `--paper-menu-button-dropdown` | Mixin applied to the paper-menu-button dropdown | `{}`
   `--paper-menu-button-content` | Mixin applied to the paper-menu-button content | `{}`
   
   @hero hero.svg
   @demo demo/index.html
   */_exports.PaperMenuButton=PaperMenuButton;Object.keys(config).forEach(function(key){PaperMenuButton[key]=config[key]});var paperMenuButton={PaperMenuButton:PaperMenuButton};// with the `Polymer` function, so this is only a cache lookup.
// https://github.com/Polymer/polymer/blob/640bc80ac7177b761d46b2fa9c455c318f2b85c6/lib/legacy/class.js#L533-L534
_exports.$paperMenuButton=paperMenuButton;var LegacyPolymerElementBase=(0,_vaadinApp.LegacyElementMixin)(HTMLElement);/**
                                                                  Material design: [Dropdown
                                                                  menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)
                                                                  
                                                                  `paper-dropdown-menu` is similar to a native browser select element.
                                                                  `paper-dropdown-menu` works with selectable content. The currently selected
                                                                  item is displayed in the control. If no item is selected, the `label` is
                                                                  displayed instead.
                                                                  
                                                                  Example:
                                                                  
                                                                      <paper-dropdown-menu label="Your favourite pastry">
                                                                        <paper-listbox slot="dropdown-content">
                                                                          <paper-item>Croissant</paper-item>
                                                                          <paper-item>Donut</paper-item>
                                                                          <paper-item>Financier</paper-item>
                                                                          <paper-item>Madeleine</paper-item>
                                                                        </paper-listbox>
                                                                      </paper-dropdown-menu>
                                                                  
                                                                  This example renders a dropdown menu with 4 options.
                                                                  
                                                                  The child element with the slot `dropdown-content` is used as the dropdown
                                                                  menu. This can be a [`paper-listbox`](paper-listbox), or any other or
                                                                  element that acts like an [`iron-selector`](iron-selector).
                                                                  
                                                                  Specifically, the menu child must fire an
                                                                  [`iron-select`](iron-selector#event-iron-select) event when one of its
                                                                  children is selected, and an
                                                                  [`iron-deselect`](iron-selector#event-iron-deselect) event when a child is
                                                                  deselected. The selected or deselected item must be passed as the event's
                                                                  `detail.item` property.
                                                                  
                                                                  Applications can listen for the `iron-select` and `iron-deselect` events
                                                                  to react when options are selected and deselected.
                                                                  
                                                                  ### Styling
                                                                  
                                                                  The following custom properties and mixins are also available for styling:
                                                                  
                                                                  Custom property | Description | Default
                                                                  ----------------|-------------|----------
                                                                  `--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
                                                                  `--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
                                                                  `--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
                                                                  `--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
                                                                  `--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
                                                                  `--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
                                                                  
                                                                  You can also use any of the `paper-input-container` and `paper-menu-button`
                                                                  style mixins and custom properties to style the internal input and menu button
                                                                  respectively.
                                                                  
                                                                  @element paper-dropdown-menu
                                                                  @demo demo/index.html
                                                                  */(0,_vaadinApp.Polymer)({/** @override */_template:(0,_vaadinApp.html)(_templateObject24_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-dropdown-menu",behaviors:[IronButtonState,IronControlState,IronFormElementBehavior,IronValidatableBehavior],properties:{/**
     * The derived "label" of the currently selected item. This value
     * is the `label` property on the selected item if set, or else the
     * trimmed text content of the selected item.
     */selectedItemLabel:{type:String,notify:!0,readOnly:!0},/**
     * The last selected item. An item is selected if the dropdown menu has
     * a child with slot `dropdown-content`, and that child triggers an
     * `iron-select` event with the selected `item` in the `detail`.
     *
     * @type {?Object}
     */selectedItem:{type:Object,notify:!0,readOnly:!0},/**
     * The value for this element that will be used when submitting in
     * a form. It reflects the value of `selectedItemLabel`. If set directly,
     * it will not update the `selectedItemLabel` value.
     */value:{type:String,notify:!0},/**
     * The label for the dropdown.
     */label:{type:String},/**
     * The placeholder for the dropdown.
     */placeholder:{type:String},/**
     * The error message to display when invalid.
     */errorMessage:{type:String},/**
     * True if the dropdown is open. Otherwise, false.
     */opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},/**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */allowOutsideScroll:{type:Boolean,value:!1},/**
     * Set to true to disable the floating label. Bind this to the
     * `<paper-input-container>`'s `noLabelFloat` property.
     */noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * Set to true to always float the label. Bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */noAnimations:{type:Boolean,value:!1},/**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */horizontalAlign:{type:String,value:"right"},/**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */verticalAlign:{type:String,value:"top"},/**
     * Overrides the vertical offset computed in
     * _computeMenuVerticalOffset.
     */verticalOffset:Number,/**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */dynamicAlign:{type:Boolean},/**
     * Whether focus should be restored to the dropdown when the menu closes.
     */restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},/**
   * @type {!Object}
   */keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],/**
   * Override `_attachDom` so that we can pass `delegatesFocus`. The overridden
   * implementation of `_attachDom` specifically skips the steps performed here
   * if the node already hosts a shadow root:
   * https://github.com/Polymer/polymer/blob/640bc80ac7177b761d46b2fa9c455c318f2b85c6/lib/mixins/element-mixin.js#L691-L694
   * @override
   */_attachDom:function _attachDom(dom){var wrappedThis=(0,_vaadinApp.wrap)(this);wrappedThis.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:dom});wrappedThis.shadowRoot.appendChild(dom);return LegacyPolymerElementBase.prototype._attachDom.call(this,dom)},/** @override */focus:function focus(){// When using Shady DOM and in browsers that don't support
// `delegatesFocus`, attempting to focus this element with the browser's
// native `HTMLElement#focus` will cause focus to be lost because this
// element isn't focusable in those situations. To work around this, the
// element in the shadow root that this element intends to delegate focus
// to is manually focused instead.
this.$.input._focusableElement.focus()},/** @override */attached:function attached(){// NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
// child will cause an `iron-select` event to fire while the element is
// still in a `DocumentFragment`. This has the effect of causing
// handlers not to fire. So, we double check this value on attached:
var contentElement=this.contentElement;if(contentElement&&contentElement.selectedItem){this._setSelectedItem(contentElement.selectedItem)}},/**
   * The content element that is contained by the dropdown menu, if any.
   */get contentElement(){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
for(var nodes=(0,_vaadinApp.dom)(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},/**
   * Show the dropdown content.
   */open:function open(){this.$.menuButton.open()},/**
   * Hide the dropdown content.
   */close:function close(){this.$.menuButton.close()},/**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} event An `iron-select` event.
   */_onIronSelect:function _onIronSelect(event){this._setSelectedItem(event.detail.item)},/**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */_onIronDeselect:function _onIronDeselect(event){this._setSelectedItem(null)},/**
   * A handler that is called when the dropdown is tapped.
   *
   * @param {CustomEvent} event A tap event.
   */_onTap:function _onTap(event){if((0,_vaadinApp.findOriginalTarget)(event)===this){this.open()}},/**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */_selectedItemChanged:function _selectedItemChanged(selectedItem){var value="";if(!selectedItem){value=""}else{value=selectedItem.label||selectedItem.getAttribute("label")||selectedItem.textContent.trim()}this.value=value;this._setSelectedItemLabel(value)},/**
   * Compute the vertical offset of the menu based on the value of
   * `noLabelFloat`.
   *
   * @param {boolean} noLabelFloat True if the label should not float
   * @param {number=} opt_verticalOffset Optional offset from the user
   * above the input, otherwise false.
   */_computeMenuVerticalOffset:function _computeMenuVerticalOffset(noLabelFloat,opt_verticalOffset){// Override offset if it's passed from the user.
if(opt_verticalOffset){return opt_verticalOffset}// NOTE(cdata): These numbers are somewhat magical because they are
// derived from the metrics of elements internal to `paper-input`'s
// template. The metrics will change depending on whether or not the
// input has a floating label.
return noLabelFloat?-4:8},/**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */_getValidity:function _getValidity(_value){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function _openedChanged(){var openState=this.opened?"true":"false",e=this.contentElement;if(e){e.setAttribute("aria-expanded",openState)}}});var PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}};/** @polymerBehavior */_exports.PaperItemBehaviorImpl=PaperItemBehaviorImpl;var PaperItemBehavior=[IronButtonState,IronControlState,PaperItemBehaviorImpl];_exports.PaperItemBehavior=PaperItemBehavior;var paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};_exports.$paperItemBehavior=paperItemBehavior;var $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$2.content);(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject25_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-item",behaviors:[PaperItemBehavior]});(0,_vaadinApp.Polymer)({_template:(0,_vaadinApp.html)(_templateObject26_f4bde900d04c11ea9be8ed19ce1a2128()),is:"paper-listbox",behaviors:[IronMenuBehavior],/** @private */hostAttributes:{role:"listbox"}});var EntityButton=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(EntityButton,_PolymerElement);function EntityButton(){babelHelpers.classCallCheck(this,EntityButton);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(EntityButton).apply(this,arguments))}babelHelpers.createClass(EntityButton,[{key:"_entityChanged",value:function _entityChanged(newValue){var colors={CDU:"orange",CSU:"black",FDP:"yellow",SPD:"red",DIELINKE:"purple",GRÜNE:"green"},parties=Object.keys(colors),name=newValue.shortname.split("-");// first extract the name
if(1<name.length&&parties.includes(name[0])){name.shift()}this.name=name.join(" ");// the pick url
this.href=newValue.urls[0];// now pick a color
var entityColour="white",changedColor=entityColour;// is a party member
if(!!newValue.party&&colors[newValue.party]){changedColor=colors[newValue.party]}// is a party 
if("party"==!!newValue.type&&colors[newValue.shortname]){changedColor=colors[newValue.shortname]}this.class=changedColor}},{key:"_classChanged",value:function _classChanged(newValue){if(!newValue||""==newValue){return}this.$.button.classList.add(newValue)}}],[{key:"template",get:function get(){return(0,_vaadinApp.html)(_templateObject27_f4bde900d04c11ea9be8ed19ce1a2128())}},{key:"is",get:function get(){return"entity-button"}},{key:"properties",get:function get(){return{entity:{type:Object,value:function value(){},observer:"_entityChanged"},class:{type:String,value:function value(){return""},observer:"_classChanged"},name:{type:String,value:function value(){return""}},href:{type:String,value:function value(){return""}}}}}]);return EntityButton}(_vaadinApp.PolymerElement);customElements.define(EntityButton.is,EntityButton);var ContentList=/*#__PURE__*/function(_mixinBehaviors){babelHelpers.inherits(ContentList,_mixinBehaviors);function ContentList(){babelHelpers.classCallCheck(this,ContentList);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ContentList).apply(this,arguments))}babelHelpers.createClass(ContentList,[{key:"_typeChanged",value:function _typeChanged(){this.srcUrl="src/data/".concat(this.day,"/").concat(this.selectedType,".json")}},{key:"_dayChanged",value:function _dayChanged(newValue,oldValue){this.srcUrl="src/data/".concat(this.day,"/").concat(this.selectedType,".json")}},{key:"_isDefined",value:function _isDefined(something){return"undefined"!=typeof something}},{key:"_findSource",value:function _findSource(sourceUrl){return this.sourceMap(sourceUrl)}// Observer method defined as a class method
},{key:"_dayDataChanged",value:function _dayDataChanged(newValue,oldValue){var _this=this;this.sources=newValue.sources;this.sources.map(function(source,index){source.feeds.map(function(feed){_this.sourceMap[feed]=source})});this.content=newValue.content.map(function(item){var author=_this.sourceMap[item.source];item.author=author;var d=new Date(item.created),ye=new Intl.DateTimeFormat("de",{year:"numeric"}).format(d),mo=new Intl.DateTimeFormat("de",{month:"long"}).format(d),da=new Intl.DateTimeFormat("de",{day:"2-digit"}).format(d);item.created="".concat(da," ").concat(mo," ").concat(ye);return item})}}],[{key:"template",get:function get(){return(0,_vaadinApp.html)(_templateObject28_f4bde900d04c11ea9be8ed19ce1a2128())}},{key:"is",get:function get(){return"content-list"}},{key:"properties",get:function get(){return{_dayData:{type:Object,value:function value(){},observer:"_dayDataChanged"},content:{type:Array,value:function value(){return[]}},sources:{type:Array,value:function value(){return[]}},day:{type:String,value:function value(){return"2020-07-27"},observer:"_dayChanged"},selectedType:{type:String,value:function value(){return"day"}},srcUrl:{type:String,value:function value(){return"src/data/2020-07-25/noon.json"}},sourceMap:{type:{},value:function value(){return[]}}}}}]);return ContentList}((0,_vaadinApp.mixinBehaviors)([NeonAnimationRunnerBehavior],_vaadinApp.PolymerElement));customElements.define(ContentList.is,ContentList)});