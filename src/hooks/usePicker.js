import { useState } from 'react'
import { genConfig } from 'react-nice-avatar'

export function usePicker() {
  const [config, setConfig] = useState(genConfig())

  const updateAttribute = (opts, attr, ...rest) => {
    const options = opts.split(',');
    let value = config[attr];
    if ((options.indexOf(value) + 1) == options.length || options.indexOf(value) == -1) {
      value = options[0];
    } else {
      value = options[options.indexOf(value) + 1];
    }
    setConfig(prev => ({ ...prev, [attr]: value, ...rest }))
  }

  const changeSkin = () => updateAttribute('#fdba74,#fed7aa,#ffedd5', "faceColor")

  const changeHair = () => {
    updateAttribute('normal,thick,mohawk,womanLong,womanShort', "hairStyle", { hairColorRandom: true })
  }

  const changeHat = () => updateAttribute('none,beanie,turban', "hatStyle")
  const changeEyes = () => updateAttribute('circle,oval,smile', 'eyeStyle')
  const changeEars = () => updateAttribute('small,big', 'earSize')

  return {
    config,
    changeSkin,
    changeHair,
    changeHat,
    changeEyes,
    changeEars
  }
}