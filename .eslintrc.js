/* global process module */

const OFF = 0;
const WARN = 1;
const ERROR = 2;
const DEBUG = process.env.NODE_ENV === 'production'
	? ERROR
	: OFF;

const ECMA_VERSION = 2018;
const MAX_COMPLEXITY = 5;
const MAX_DEPTH = 3;
const MAX_NESTED_CALLBACKS = 2;
const MIN_CHAIN_LENGTH_FORCE_NEWLINE = 3;
const MAX_JSX_DEPTH = 5;
const MAX_JSX_PROPS_PER_LINE = 3;

module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: ECMA_VERSION,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [ 'import', 'jsx-a11y', 'react' ],
	settings: {
		react: {
			version: '16.4.2'
		}
	},
	rules: {
		// eslint@5.4.0
		// Possible Errors
		'for-direction': ERROR,
		'getter-return': ERROR,
		'no-async-promise-executor': ERROR,
		'no-await-in-loop': WARN,
		'no-compare-neg-zero': ERROR,
		'no-cond-assign': ERROR,
		'no-console': DEBUG,
		'no-constant-condition': DEBUG,
		'no-control-regex': ERROR,
		'no-debugger': DEBUG,
		'no-dupe-args': ERROR,
		'no-dupe-keys': ERROR,
		'no-duplicate-case': ERROR,
		'no-empty': [ ERROR, { allowEmptyCatch: true }],
		'no-empty-character-class': ERROR,
		'no-ex-assign': ERROR,
		'no-extra-boolean-cast': ERROR,
		'no-extra-parens': OFF,
		'no-extra-semi': ERROR,
		'no-func-assign': ERROR,
		'no-inner-declarations': ERROR,
		'no-invalid-regexp': ERROR,
		'no-irregular-whitespace': ERROR,
		'no-misleading-character-class': ERROR,
		'no-obj-calls': ERROR,
		'no-prototype-builtins': ERROR,
		'no-regex-spaces': ERROR,
		'no-sparse-arrays': ERROR,
		'no-template-curly-in-string': ERROR,
		'no-unexpected-multiline': ERROR,
		'no-unreachable': ERROR,
		'no-unsafe-finally': ERROR,
		'no-unsafe-negation': ERROR,
		'require-atomic-updates': ERROR,
		'use-isnan': ERROR,
		'valid-jsdoc': [
			DEBUG,
			{
				prefer: {
					arg: 'param',
					argument: 'param',
					return: 'returns',
					virtual: 'abstract'
				},
				preferType: {
					Boolean: 'boolean',
					Number: 'number',
					object: 'Object',
					String: 'string'
				},
				requireParamDescription: false,
				requireReturn: false,
				requireReturnDescription: false,
				requireReturnType: true
			}
		],
		'valid-typeof': ERROR,

		// Best Practices
		'accessor-pairs': ERROR,
		'array-callback-return': ERROR,
		'block-scoped-var': ERROR,
		'class-methods-use-this': ERROR,
		'complexity': [ ERROR, { max: MAX_COMPLEXITY }],
		'consistent-return': ERROR,
		'curly': [ ERROR, 'multi-line', 'consistent' ],
		'default-case': ERROR,
		'dot-location': [ ERROR, 'property' ],
		'dot-notation': ERROR,
		'eqeqeq': ERROR,
		'guard-for-in': ERROR,
		'max-classes-per-file': ERROR,
		'no-alert': ERROR,
		'no-caller': ERROR,
		'no-case-declarations': ERROR,
		'no-div-regex': ERROR,
		'no-else-return': ERROR,
		'no-empty-function': ERROR,
		'no-empty-pattern': ERROR,
		'no-eq-null': ERROR,
		'no-eval': ERROR,
		'no-extend-native': ERROR,
		'no-extra-bind': ERROR,
		'no-extra-label': ERROR,
		'no-fallthrough': ERROR,
		'no-floating-decimal': OFF,
		'no-global-assign': ERROR,
		'no-implicit-coercion': ERROR,
		'no-implicit-globals': ERROR,
		'no-implied-eval': ERROR,
		'no-invalid-this': ERROR,
		'no-iterator': ERROR,
		'no-labels': ERROR,
		'no-lone-blocks': ERROR,
		'no-loop-func': ERROR,
		'no-magic-numbers': [
			ERROR,
			{
				ignore: [ -1, 0, 1, 10 ],
				enforceConst: true,
				detectObjects: true
			}
		],
		'no-multi-spaces': ERROR,
		'no-multi-str': ERROR,
		'no-new': ERROR,
		'no-new-func': ERROR,
		'no-new-wrappers': ERROR,
		'no-octal': ERROR,
		'no-octal-escape': ERROR,
		'no-param-reassign': ERROR,
		'no-proto': ERROR,
		'no-redeclare': ERROR,
		'no-restricted-properties': ERROR,
		'no-return-assign': ERROR,
		'no-return-await': ERROR,
		'no-script-url': ERROR,
		'no-self-assign': ERROR,
		'no-self-compare': ERROR,
		'no-sequences': ERROR,
		'no-throw-literal': ERROR,
		'no-unmodified-loop-condition': ERROR,
		'no-unused-expressions': ERROR,
		'no-unused-labels': ERROR,
		'no-useless-call': ERROR,
		'no-useless-concat': ERROR,
		'no-useless-escape': ERROR,
		'no-useless-return': ERROR,
		'no-void': OFF,
		'no-warning-comments': DEBUG,
		'no-with': ERROR,
		'prefer-promise-reject-errors': [ ERROR, { allowEmptyReject: true }],
		'radix': OFF,
		'require-await': ERROR,
		'require-unicode-regexp': OFF,
		'vars-on-top': ERROR,
		'wrap-iife': [ ERROR, 'inside' ],
		'yoda': ERROR,

		// Strict Mode
		'strict': [ ERROR, 'never' ],

		// Variables
		'init-declarations': OFF,
		'no-delete-var': ERROR,
		'no-label-var': ERROR,
		'no-restricted-globals': ERROR,
		'no-shadow': ERROR,
		'no-shadow-restricted-names': ERROR,
		'no-undef': ERROR,
		'no-undef-init': ERROR,
		'no-undefined': ERROR,
		'no-unused-vars': [ ERROR, { argsIgnorePattern: "^_$" }],
		'no-use-before-define': ERROR,

		// Node.js and CommonJS
		'callback-return': ERROR,
		'global-require': OFF,
		'handle-callback-err': ERROR,
		'no-buffer-constructor': ERROR,
		'no-mixed-requires': ERROR,
		'no-new-require': OFF,
		'no-path-concat': ERROR,
		'no-process-env': OFF,
		'no-process-exit': ERROR,
		'no-restricted-modules': OFF,
		'no-sync': ERROR,

		// Stylistic Issues
		'array-bracket-newline': [ ERROR, 'consistent' ],
		'array-bracket-spacing': [
			ERROR,
			'always',
			{
				arraysInArrays: false,
				objectsInArrays: false
			}
		],
		'array-element-newline': OFF,
		'block-spacing': ERROR,
		'brace-style': [ ERROR, '1tbs', { allowSingleLine: true }],
		'camelcase': ERROR,
		'capitalized-comments': [ ERROR, 'always', { ignorePattern: 'tslint' }],
		'comma-dangle': ERROR,
		'comma-spacing': ERROR,
		'comma-style': ERROR,
		'computed-property-spacing': ERROR,
		'consistent-this': [ ERROR, 'self' ],
		'eol-last': ERROR,
		'func-call-spacing': ERROR,
		'func-name-matching': ERROR,
		'func-names': ERROR,
		'func-style': [ ERROR, 'declaration', { allowArrowFunctions: true }],
		'function-paren-newline': [ ERROR, 'consistent' ],
		'id-blacklist': OFF,
		'id-length': OFF,
		'id-match': OFF,
		'implicit-arrow-linebreak': OFF,
		'indent': [ ERROR, 'tab' ],
		'jsx-quotes': ERROR,
		'key-spacing': ERROR,
		'keyword-spacing': ERROR,
		'line-comment-position': OFF,
		'linebreak-style': ERROR,
		'lines-around-comment': [ ERROR, { beforeBlockComment: true, allowBlockStart: true, allowClassStart: true }],
		'lines-between-class-members': ERROR,
		'max-depth': [ ERROR, { max: MAX_DEPTH }],
		'max-len': OFF,
		'max-lines': OFF,
		'max-lines-per-function': OFF,
		'max-nested-callbacks': [ ERROR, { max: MAX_NESTED_CALLBACKS }],
		'max-params': [ ERROR, 4 ],
		'max-statements': OFF,
		'max-statements-per-line': ERROR,
		'multiline-comment-style': ERROR,
		'multiline-ternary': OFF,
		'new-cap': ERROR,
		'new-parens': ERROR,
		'newline-per-chained-call': [ ERROR, { ignoreChainWithDepth: MIN_CHAIN_LENGTH_FORCE_NEWLINE }],
		'no-array-constructor': OFF,
		'no-bitwise': OFF,
		'no-continue': OFF,
		'no-inline-comments': OFF,
		'no-lonely-if': ERROR,
		'no-mixed-operators': OFF,
		'no-mixed-spaces-and-tabs': ERROR,
		'no-multi-assign': ERROR,
		'no-multiple-empty-lines': ERROR,
		'no-negated-condition': ERROR,
		'no-nested-ternary': ERROR,
		'no-new-object': ERROR,
		'no-plusplus': OFF,
		'no-restricted-syntax': OFF,
		'no-tabs': OFF,
		'no-ternary': OFF,
		'no-trailing-spaces': ERROR,
		'no-underscore-dangle': ERROR,
		'no-unneeded-ternary': ERROR,
		'no-whitespace-before-property': ERROR,
		'nonblock-statement-body-position': ERROR,
		'object-curly-newline': [ ERROR, { consistent: true }],
		'object-curly-spacing': [ ERROR, 'always', { objectsInObjects: false } ],
		'object-property-newline': OFF,
		'one-var': [ ERROR, 'never' ],
		'one-var-declaration-per-line': OFF,
		'operator-assignment': ERROR,
		'operator-linebreak': [ ERROR, 'before' ],
		'padded-blocks': [ ERROR, 'never' ],
		'padding-line-between-statements': OFF,
		'prefer-object-spread': ERROR,
		'quote-props': [ ERROR, 'consistent-as-needed' ],
		'quotes': [ ERROR, 'single' ],
		'require-jsdoc': [
			DEBUG,
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true,
					FunctionExpression: true
				}
			}
		],
		'semi': ERROR,
		'semi-spacing': ERROR,
		'semi-style': ERROR,
		'sort-keys': OFF,
		'sort-vars': OFF,
		'space-before-blocks': ERROR,
		'space-before-function-paren': [ ERROR, 'never' ],
		'space-in-parens': ERROR,
		'space-infix-ops': ERROR,
		'space-unary-ops': ERROR,
		'spaced-comment': ERROR,
		'switch-colon-spacing': ERROR,
		'template-tag-spacing': ERROR,
		'unicode-bom': ERROR,
		'wrap-regex': OFF,

		// ECMAScript 6
		'arrow-body-style': [ ERROR, 'as-needed' ],
		'arrow-parens': [ ERROR, 'as-needed' ],
		'arrow-spacing': ERROR,
		'constructor-super': ERROR,
		'generator-star-spacing': [ ERROR, { before: false, after: true }],
		'no-class-assign': ERROR,
		'no-confusing-arrow': ERROR,
		'no-const-assign': ERROR,
		'no-dupe-class-members': ERROR,
		'no-duplicate-imports': ERROR,
		'no-new-symbol': ERROR,
		'no-restricted-imports': OFF,
		'no-this-before-super': ERROR,
		'no-useless-computed-key': ERROR,
		'no-useless-constructor': ERROR,
		'no-useless-rename': ERROR,
		'no-var': ERROR,
		'object-shorthand': ERROR,
		'prefer-arrow-callback': ERROR,
		'prefer-const': ERROR,
		'prefer-destructuring': ERROR,
		'prefer-numeric-literals': ERROR,
		'prefer-rest-params': ERROR,
		'prefer-spread': ERROR,
		'prefer-template': ERROR,
		'require-yield': ERROR,
		'rest-spread-spacing': ERROR,
		'sort-imports': OFF, // see import/order
		'symbol-description': OFF,
		'template-curly-spacing': ERROR,
		'yield-star-spacing': ERROR,

		// eslint-plugin-react@7.11.1
		'react/boolean-prop-naming': [ ERROR, { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
		'react/button-has-type': OFF,
		'react/default-props-match-prop-types': ERROR,
		'react/destructuring-assignment': OFF,
		'react/display-name': OFF,
		'react/forbid-component-props': OFF,
		'react/forbid-dom-props': OFF,
		'react/forbid-elements': OFF,
		'react/forbid-prop-types': OFF,
		'react/forbid-foreign-prop-types': OFF,
		'react/no-access-state-in-setstate': ERROR,
		'react/no-array-index-key': ERROR,
		'react/no-children-prop': ERROR,
		'react/no-danger': ERROR,
		'react/no-danger-with-children': ERROR,
		'react/no-deprecated': ERROR,
		'react/no-did-mount-set-state': ERROR,
		'react/no-did-update-set-state': ERROR,
		'react/no-direct-mutation-state': ERROR,
		'react/no-find-dom-node': ERROR,
		'react/no-is-mounted': ERROR,
		'react/no-multi-comp': [ ERROR, { ignoreStateless: true }],
		'react/no-redundant-should-component-update': ERROR,
		'react/no-render-return-value': ERROR,
		'react/no-set-state': OFF,
		'react/no-typos': WARN,
		'react/no-string-refs': ERROR,
		'react/no-this-in-sfc': ERROR,
		'react/no-unescaped-entities': ERROR,
		'react/no-unknown-property': ERROR,
		'react/no-unused-prop-types': ERROR,
		'react/no-unused-state': ERROR,
		'react/no-will-update-set-state': ERROR,
		'react/prefer-es6-class': ERROR,
		'react/prefer-stateless-function': ERROR,
		'react/prop-types': [ ERROR, { ignore: [ 'children' ]}],
		'react/react-in-jsx-scope': ERROR,
		'react/require-default-props': ERROR,
		'react/require-optimization': OFF,
		'react/require-render-return': ERROR,
		'react/self-closing-comp': ERROR,
		'react/sort-comp': OFF,
		'react/sort-prop-types': OFF,
		'react/style-prop-object': ERROR,
		'react/void-dom-elements-no-children': ERROR,

		'react/jsx-boolean-value': ERROR,
		'react/jsx-child-element-spacing': ERROR,
		'react/jsx-closing-bracket-location': ERROR,
		'react/jsx-closing-tag-location': ERROR,
		'react/jsx-curly-spacing': ERROR,
		'react/jsx-equals-spacing': ERROR,
		'react/jsx-filename-extension': OFF,
		'react/jsx-first-prop-new-line': ERROR,
		'react/jsx-handler-names': ERROR,
		'react/jsx-indent': [ ERROR, 'tab' ],
		'react/jsx-indent-props': [ ERROR, 'tab' ],
		'react/jsx-key': ERROR,
		'react/jsx-max-depth': [ ERROR, { max: MAX_JSX_DEPTH }],
		'react/jsx-max-props-per-line': [ ERROR, { maximum: MAX_JSX_PROPS_PER_LINE }],
		'react/jsx-no-bind': ERROR,
		'react/jsx-no-comment-textnodes': ERROR,
		'react/jsx-no-duplicate-props': ERROR,
		'react/jsx-no-literals': ERROR,
		'react/jsx-no-target-blank': ERROR,
		'react/jsx-no-undef': ERROR,
		'react/jsx-one-expression-per-line': OFF,
		'react/jsx-curly-brace-presence': ERROR,
		'react/jsx-pascal-case': ERROR,
		'react/jsx-sort-default-props': OFF,
		'react/jsx-sort-props': OFF,
		'react/jsx-tag-spacing': ERROR,
		'react/jsx-uses-react': ERROR,
		'react/jsx-uses-vars': ERROR,
		'react/jsx-wrap-multilines': ERROR,

		// eslint-plugin-jsx-a11y@6.1.1
		'jsx-a11y/accessible-emoji': ERROR,
		'jsx-a11y/alt-text': ERROR,
		'jsx-a11y/anchor-has-content': ERROR,
		'jsx-a11y/anchor-is-valid': ERROR,
		'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
		'jsx-a11y/aria-props': ERROR,
		'jsx-a11y/aria-proptypes': ERROR,
		'jsx-a11y/aria-role': ERROR,
		'jsx-a11y/aria-unsupported-elements': ERROR,
		'jsx-a11y/click-events-have-key-events': ERROR,
		'jsx-a11y/heading-has-content': ERROR,
		'jsx-a11y/html-has-lang': ERROR,
		'jsx-a11y/iframe-has-title': ERROR,
		'jsx-a11y/img-redundant-alt': ERROR,
		'jsx-a11y/interactive-supports-focus': ERROR,
		'jsx-a11y/label-has-associated-control': ERROR,
		'jsx-a11y/lang': ERROR,
		'jsx-a11y/media-has-caption': ERROR,
		'jsx-a11y/mouse-events-have-key-events': ERROR,
		'jsx-a11y/no-access-key': ERROR,
		'jsx-a11y/no-autofocus': OFF,
		'jsx-a11y/no-distracting-elements': ERROR,
		'jsx-a11y/no-interactive-element-to-noninteractive-role': ERROR,
		'jsx-a11y/no-noninteractive-element-interactions': ERROR,
		'jsx-a11y/no-noninteractive-element-to-interactive-role': ERROR,
		'jsx-a11y/no-noninteractive-tabindex': ERROR,
		'jsx-a11y/no-onchange': ERROR,
		'jsx-a11y/no-redundant-roles': ERROR,
		'jsx-a11y/no-static-element-interactions': ERROR,
		'jsx-a11y/role-has-required-aria-props': ERROR,
		'jsx-a11y/role-supports-aria-props': ERROR,
		'jsx-a11y/scope': ERROR,
		'jsx-a11y/tabindex-no-positive': ERROR,

		// eslint-plugin-import@2.14.0
		'import/no-unresolved': [ ERROR, { ignore: [ '\.css$' ] }],
		'import/named': ERROR,
		'import/default': ERROR,
		'import/namespace': ERROR,
		'import/no-restricted-paths': ERROR,
		'import/no-absolute-path': ERROR,
		'import/no-dynamic-require': ERROR,
		'import/no-internal-modules': OFF,
		'import/no-webpack-loader-syntax': ERROR,
		'import/no-self-import': ERROR,
		'import/no-cycle': ERROR,
		'import/no-useless-path-segments': ERROR,
		'import/export': ERROR,
		'import/no-named-as-default': ERROR,
		'import/no-named-as-default-member': ERROR,
		'import/no-deprecated': ERROR,
		'import/no-extraneous-dependencies': ERROR,
		'import/no-mutable-exports': ERROR,
		'import/unambiguous': ERROR,
		'import/no-commonjs': ERROR,
		'import/no-amd': ERROR,
		'import/no-nodejs-modules': ERROR,
		'import/first': ERROR,
		'import/exports-last': OFF,
		'import/no-duplicates': ERROR,
		'import/no-namespace': ERROR,
		'import/extensions': [ ERROR, 'always', { ignorePackages: true }],
		'import/order': ERROR,
		'import/newline-after-import': ERROR,
		'import/prefer-default-export': OFF,
		'import/max-dependencies': OFF,
		'import/no-unassigned-import': [ ERROR, { allow: ['**/*.css' ]}],
		'import/no-named-default': ERROR,
		'import/no-default-export': OFF, // see tslint/no-default-export
		'import/no-anonymous-default-export': ERROR,
		'import/group-exports': OFF,
		'import/dynamic-import-chunkname': ERROR
	}
};
