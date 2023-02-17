/**
 * @file Настройки ESLint для Typescript.
 * @author Melanich Artem
 */
const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;
const MAX_DEPTH = 3;
const MAX_PARAMS = 4;
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['unicorn', 'react', '@typescript-eslint', 'jsdoc'],
  'rules': {
    'array-bracket-newline': OFF,
    'array-bracket-spacing': [ERROR, 'never'],
    'array-element-newline': OFF,
    'arrow-parens': [ERROR, 'always'],
    'block-spacing': [ERROR, 'never'],
    'brace-style': OFF,
    'complexity': [ERROR, {
      'max': 12
    }],
    'curly': [ERROR, 'multi-line'],
    'camelcase': OFF,
    'comma-dangle': OFF,
    'comma-spacing': OFF,
    'comma-style': ERROR,
    'computed-property-spacing': ERROR,
    'constructor-super': ERROR,
    'default-param-last': OFF,
    'dot-location': [ERROR, 'property'],
    'eqeqeq': WARNING,
    'eol-last': ERROR,
    'for-direction': WARNING,
    'func-call-spacing': OFF,
    'guard-for-in': ERROR,
    'generator-star-spacing': [ERROR, 'after'],
    'indent': OFF,
    'id-length': [ERROR, {
      'exceptions': ['x', 'y', 'z', 'i', 'j', '_', 'id', 'it'],
      'properties': 'never',
      'min': 2,
      'max': 24
    }],
    'id-denylist': [OFF, 'data', 'err', 'e', 'cb', 'callback', 'result', 'cur', 'current'],
    'init-declarations': OFF,
    'jsdoc/check-access': WARNING,
    'jsdoc/check-alignment': WARNING,
    'jsdoc/check-examples': OFF,
    'jsdoc/check-indentation': WARNING,
    'jsdoc/check-line-alignment': WARNING,
    'jsdoc/check-param-names': WARNING,
    'jsdoc/check-property-names': WARNING,
    'jsdoc/check-syntax': WARNING,
    'jsdoc/check-tag-names': OFF,
    'jsdoc/check-types': WARNING,
    'jsdoc/check-values': WARNING,
    'jsdoc/empty-tags': WARNING,
    'jsdoc/implements-on-classes': WARNING,
    'jsdoc/match-description': OFF,
    'jsdoc/multiline-blocks': WARNING,
    'jsdoc/newline-after-description': WARNING,
    'jsdoc/no-bad-blocks': WARNING,
    'jsdoc/no-defaults': WARNING,
    'jsdoc/no-missing-syntax': OFF,
    'jsdoc/no-multi-asterisks': WARNING,
    'jsdoc/no-restricted-syntax': OFF,
    'jsdoc/no-types': OFF,
    'jsdoc/no-undefined-types': WARNING,
    'jsdoc/require-asterisk-prefix': WARNING,
    'jsdoc/require-description': WARNING,
    'jsdoc/require-description-complete-sentence': WARNING,
    'jsdoc/require-example': WARNING,
    'jsdoc/require-file-overview': WARNING,
    'jsdoc/require-hyphen-before-param-description': WARNING,
    'jsdoc/require-jsdoc': WARNING,
    'jsdoc/require-param': WARNING,
    'jsdoc/require-param-description': WARNING,
    'jsdoc/require-param-name': WARNING,
    'jsdoc/require-param-type': WARNING,
    'jsdoc/require-property': WARNING,
    'jsdoc/require-property-description': WARNING,
    'jsdoc/require-property-name': WARNING,
    'jsdoc/require-property-type': WARNING,
    'jsdoc/require-returns': OFF,
    'jsdoc/require-returns-check': WARNING,
    'jsdoc/require-returns-description': WARNING,
    'jsdoc/require-returns-type': WARNING,
    'jsdoc/require-throws': WARNING,
    'jsdoc/require-yields': WARNING,
    'jsdoc/require-yields-check': WARNING,
    'jsdoc/tag-lines': WARNING,
    'jsdoc/valid-types': WARNING,
    'key-spacing': ERROR,
    'keyword-spacing': OFF,
    'lines-between-class-members': OFF,
    'linebreak-style': ERROR,
    'max-depth': [ERROR, MAX_DEPTH],
    'max-params': [ERROR, MAX_PARAMS],
    'max-len': [ERROR, {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true
    }],
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-new-wrappers': ERROR,
    'no-throw-literal': ERROR,
    'no-with': ERROR,
    'no-array-constructor': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multiple-empty-lines': [ERROR, {
      max: 1
    }],
    'no-new-object': ERROR,
    'no-tabs': ERROR,
    'no-trailing-spaces': ERROR,
    'no-cond-assign': WARNING,
    'no-irregular-whitespace': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-alert': WARNING,
    'no-caller': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-floating-decimal': ERROR,
    'no-invalid-this': ERROR,
    'no-shadow': OFF,
    'no-new-symbol': ERROR,
    'no-this-before-super': ERROR,
    'no-var': ERROR,
    'no-magic-numbers': OFF,
    'newline-per-chained-call': WARNING,
    'object-curly-spacing': OFF,
    'one-var': [ERROR, {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    'operator-linebreak': [ERROR, 'after'],
    'padded-blocks': [ERROR, 'never'],
    'padding-line-between-statements': OFF,
    'prefer-promise-reject-errors': ERROR,
    'prefer-const': [ERROR, {
      destructuring: 'all'
    }],
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': WARNING,
    'quote-props': [ERROR, 'consistent'],
    'quotes': OFF,
    'react/jsx-wrap-multilines': ERROR,
    'react/jsx-tag-spacing': [ERROR, {
      'beforeSelfClosing': 'proportional-always'
    }],
    'react/jsx-boolean-value': ERROR,
    'react/jsx-closing-bracket-location': ERROR,
    'react/jsx-curly-newline': ERROR,
    'react/jsx-curly-spacing': ERROR,
    'react/jsx-equals-spacing': ERROR,
    'react/jsx-handler-names': ERROR,
    'react/jsx-indent-props': ERROR,
    'react/jsx-no-bind': ERROR,
    'react/jsx-no-constructed-context-values': ERROR,
    'react/jsx-no-leaked-render': ERROR,
    'react/jsx-one-expression-per-line': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-props-no-multi-spaces': ERROR,
    'react/jsx-space-before-closing': [ERROR, 'always'],
    'react/state-in-constructor': ERROR,
    'react/style-prop-object': ERROR,
    // 'react/jsx-indent': ERROR,
    'require-await': WARNING,
    'require-jsdoc': [ERROR, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'rest-spread-spacing': ERROR,
    'semi': ERROR,
    'semi-spacing': ERROR,
    'space-before-blocks': OFF,
    'space-before-function-paren': OFF,
    'space-infix-ops': OFF,
    'space-unary-ops': ERROR,
    'spaced-comment': [ERROR, 'always'],
    'switch-colon-spacing': ERROR,
    'sort-imports': [ERROR, {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': false
    }],
    'template-curly-spacing': ERROR,
    'valid-jsdoc': [ERROR, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {
        returns: 'return'
      }
    }],
    'yield-star-spacing': [ERROR, 'after'],
    '@typescript-eslint/array-type': [ERROR, {
      'default': 'generic'
    }],
    '@typescript-eslint/ban-types': ERROR,
    '@typescript-eslint/ban-ts-comment': ERROR,
    '@typescript-eslint/brace-style': ERROR,
    '@typescript-eslint/comma-dangle': [ERROR, 'always-multiline'],
    '@typescript-eslint/comma-spacing': ERROR,
    '@typescript-eslint/default-param-last': ERROR,
    '@typescript-eslint/func-call-spacing': ERROR,
    '@typescript-eslint/keyword-spacing': ERROR,
    '@typescript-eslint/indent': [ERROR, INDENT_SIZE, {
      'CallExpression': {
        'arguments': 2
      },
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 2
      },
      'FunctionExpression': {
        'body': 1,
        'parameters': 2
      },
      'MemberExpression': 2,
      'ObjectExpression': 1,
      'SwitchCase': 1,
      'ignoredNodes': ['ConditionalExpression']
    }],
    '@typescript-eslint/init-declarations': ERROR,
    '@typescript-eslint/lines-between-class-members': [ERROR, 'always'],
    '@typescript-eslint/method-signature-style': [ERROR, 'property'],
    '@typescript-eslint/member-delimiter-style': [ERROR, {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': true
      },
      'overrides': {
        'interface': {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true
          }
        }
      }
    }],
    '@typescript-eslint/member-ordering': [ERROR, {
      'default': {
        'memberTypes': [// Index signature
        'signature', // Fields
        'public-static-field', 'protected-static-field', 'private-static-field', 'public-decorated-field', 'protected-decorated-field', 'private-decorated-field', 'public-instance-field', 'protected-instance-field', 'private-instance-field', 'public-abstract-field', 'protected-abstract-field', 'private-abstract-field', 'public-field', 'protected-field', 'private-field', 'static-field', 'instance-field', 'abstract-field', 'decorated-field', 'field', // Constructors
        'public-constructor', 'protected-constructor', 'private-constructor', 'constructor', // Getters
        'public-static-get', 'protected-static-get', 'private-static-get', 'public-decorated-get', 'protected-decorated-get', 'private-decorated-get', 'public-instance-get', 'protected-instance-get', 'private-instance-get', 'public-abstract-get', 'protected-abstract-get', 'private-abstract-get', 'public-get', 'protected-get', 'private-get', 'static-get', 'instance-get', 'abstract-get', 'decorated-get', 'get', // Setters
        'public-static-set', 'protected-static-set', 'private-static-set', 'public-decorated-set', 'protected-decorated-set', 'private-decorated-set', 'public-instance-set', 'protected-instance-set', 'private-instance-set', 'public-abstract-set', 'protected-abstract-set', 'private-abstract-set', 'public-set', 'protected-set', 'private-set', 'static-set', 'instance-set', 'abstract-set', 'decorated-set', 'set', // Methods
        'public-static-method', 'protected-static-method', 'private-static-method', 'public-decorated-method', 'protected-decorated-method', 'private-decorated-method', 'public-instance-method', 'protected-instance-method', 'private-instance-method', 'public-abstract-method', 'protected-abstract-method', 'private-abstract-method', 'public-method', 'protected-method', 'private-method', 'static-method', 'instance-method', 'abstract-method', 'decorated-method', 'method']
      },
      'classes': {
        'memberTypes': [// Constructors
        'public-constructor', 'protected-constructor', 'private-constructor', 'constructor', // Methods
        'public-static-method', 'protected-static-method', 'private-static-method', 'public-decorated-method', 'protected-decorated-method', 'private-decorated-method', 'public-instance-method', 'protected-instance-method', 'private-instance-method', 'public-abstract-method', 'protected-abstract-method', 'private-abstract-method', 'public-method', 'protected-method', 'private-method', 'static-method', 'instance-method', 'abstract-method', 'decorated-method', 'method'],
        'order': 'alphabetically'
      }
    }],
    '@typescript-eslint/naming-convention': [ERROR, {
      'selector': 'default',
      'format': ['camelCase']
    }, {
      'selector': ['interface', 'typeAlias', 'enum', 'typeParameter'],
      'format': ['StrictPascalCase'],
      'prefix': ['T'] // 'format': null,
      // 'custom': {
      //  'regex': '^T([A-Z][a-z]+)+$',
      //  'match': true,
      // },

    }, {
      'selector': 'class',
      'format': ['StrictPascalCase']
    }, {
      'selector': ['variableLike', 'memberLike', 'method', 'property'],
      'format': ['strictCamelCase']
    }, {
      'selector': 'variable',
      'modifiers': ['const'],
      'format': ['strictCamelCase']
    }, {
      'selector': ['parameter'],
      'format': null,
      'custom': {
        'regex': '(^[a-z]+([A-Z]?[a-z]+)+$|^_$)',
        'match': true
      }
    }, {
      'selector': 'variable',
      'modifiers': ['const', 'global'],
      'format': ['UPPER_CASE']
    }, {
      'selector': ['classMethod', 'classProperty'],
      'modifiers': ['private'],
      'format': ['strictCamelCase'],
      'leadingUnderscore': 'require'
    }, {
      'selector': ['property', 'objectLiteralProperty', 'typeProperty', 'parameterProperty'],
      'format': null
    }],
    '@typescript-eslint/no-unused-vars': [WARNING, {
      'argsIgnorePattern': '^_'
    }],
    '@typescript-eslint/no-magic-numbers': [WARNING, {
      'ignore': [0, 1],
      'ignoreArrayIndexes': true,
      'enforceConst': true,
      'ignoreDefaultValues': true
    }],
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/object-curly-spacing': ERROR,
    '@typescript-eslint/padding-line-between-statements': [ERROR, {
      blankLine: 'always',
      prev: 'import',
      next: ['interface', 'type', 'block', 'block-like', 'class', 'const', 'do', 'expression', 'for', 'function', 'if', 'iife', 'let', 'switch', 'throw', 'try', 'var', 'while', 'with']
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'if'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'for'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'do'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'while'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'switch'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'try'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'function'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'interface'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'type'
    }, {
      blankLine: 'always',
      prev: '*',
      next: 'export'
    }],
    '@typescript-eslint/quotes': [ERROR, 'single', {
      allowTemplateLiterals: true
    }],
    '@typescript-eslint/space-before-blocks': ERROR,
    '@typescript-eslint/space-before-function-paren': [ERROR, {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never'
    }],
    '@typescript-eslint/space-infix-ops': [ERROR, {
      'int32Hint': false
    }],
    '@typescript-eslint/type-annotation-spacing': [WARNING, {
      before: true,
      after: true
    }],
    'unicorn/no-for-loop': ERROR,
    'unicorn/no-array-for-each': ERROR,
    'unicorn/no-zero-fractions': ERROR,
    'unicorn/number-literal-case': ERROR,
    'unicorn/numeric-separators-style': ERROR,
    'unicorn/no-useless-undefined': ERROR,
    'unicorn/prefer-default-parameters': ERROR,
    'unicorn/prefer-logical-operator-over-ternary': ERROR,
    'unicorn/prefer-ternary': ERROR
  }
};