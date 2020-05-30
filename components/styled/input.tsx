import {Input} from 'antd'
import {InputProps} from 'antd/lib/input/Input'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {FormDesignFragment} from '../../graphql/fragment/form.fragment'
import {transparentize} from './color.change'

interface Props extends InputProps{
  design: FormDesignFragment
}

export const StyledInput: React.FC<Props> = ({design, children, ...props}) => {
  const [Field, setField] = useState()

  useEffect(() => {
    setField(
      styled(Input)`
        color: ${design.colors.answerColor};
        border-color: ${design.colors.answerColor};
        background: none !important;
        border-right: none;
        border-top: none;
        border-left: none;
        border-radius: 0;
        
        :focus {
          outline: ${design.colors.answerColor} auto 5px
        }
        
        :hover,
        :active {
          border-color: ${design.colors.answerColor};
        }
        
        &.ant-input-affix-wrapper {
          box-shadow: none
        }
        
        input {
          background: none !important;
          color: ${design.colors.answerColor};
          
          ::placeholder {
            color: ${transparentize(design.colors.answerColor, 60)}
          }
        }
        
        .anticon {
          color: ${design.colors.answerColor};
        }
      `
    )
  }, [design])

  if (!Field) {
    return null
  }

  return (
    <Field {...props}>{children}</Field>
  )
}
