import { Button } from '../../atoms/Button'
import { StyledBoostersWrapper } from './Boosters.styles'
import React from 'react'

type BoostersType = {
  onBoostAction: (action: 'reset' | 'full' | 'rest') => void
}
const Boosters: React.FC<BoostersType> = ({ onBoostAction }) => {
  const resetClickHandler = () => {
    onBoostAction('reset')
  }
  const boostFullWorkedClickHandler = () => {
    onBoostAction('full')
  }
  const boostFullRestedClickHandler = () => {
    onBoostAction('rest')
  }
  return (
    <StyledBoostersWrapper>
      <div className="actionsWrapper">
        <Button className="boostButton">🚀</Button>
        <div className="boostActions">
          <Button variant="outlined" onClick={boostFullWorkedClickHandler}>
            Full worked
          </Button>
          <Button variant="outlined" onClick={boostFullRestedClickHandler}>
            Full Rested
          </Button>
          <Button color="secondary" onClick={resetClickHandler}>
            reset
          </Button>
        </div>
      </div>
      <div className="legendsWrapper">
        <div className="legend">
          <div className="legendBox worked"></div>
          <label>Travaillé</label>
        </div>
        <div className="legend">
          <div className="legendBox half"></div>
          <label>Demie-journée</label>
        </div>
        <div className="legend">
          <div className="legendBox rested"></div>
          <label>Repos</label>
        </div>
      </div>
    </StyledBoostersWrapper>
  )
}

export { Boosters }
