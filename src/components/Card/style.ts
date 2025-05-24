import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--white);
  color: var(--black);
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: space-between;

  @media (width >= 480px) {
    flex-direction: row;
  }
`

export const CardHeaderTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--black-lighter);
`

export const CardHeaderLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--red);
  font-size: .875rem;
  text-decoration: none;

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: var(--red-light);
  }
`

export const CardScore = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media (width >= 480px) {
    flex-direction: row;
  }
`

export const CardScoreTeams = styled.div`
  display: flex;
  gap: 16px;
`

export const CardScoreTeam = styled.strong`
  font-weight: 600;
  font-size: .875rem;
  color: var(--black-lighter);
  
  @media (width >= 480px) {
    font-size: 1.125rem;
  }
`

export const CardScoreResult = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    
    @media (width >= 480px) {
      font-size: 2rem;
    }
  }

  span {
    color: var(--white-darker);
  }
`

export const CardTags = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (width >= 480px) {
    flex-direction: row;
  }
`

export const CardTag = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: .875rem;
  background-color: var(--white-dark);
`