import styled from "styled-components"

interface ProgressProps {
  isActive: boolean;
}

export const Container = styled.div`
   display: flex;
   align-items: center;
   width: 148px;
   height: 12px;
   gap: 8px;
`

export const Circle = styled.span<ProgressProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.isActive ? '#007AFF' : 'transparent'};
  border: 1px solid ${(props) => props.isActive ? '#007AFF' : '#E5E5E5'};
`

export const Line = styled.span<ProgressProps>`
  width: 40px;
  height: 2px;
  background-color: ${(props) => props.isActive ? '#007AFF' : '#E5E5E5'};
`
