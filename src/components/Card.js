import React from 'react'
import Tree from './Tree'

const bodyParts = {
  head: [
    'cabeza',
    {
      face: [
        'cara',
        {
          eye: [
            'ojo',
            {
              eyelid: 'párpado',
              eyelash: 'pestaña',
              eyebrow: 'ceja'
            }
          ],
          nose: 'nariz',
          mouth: [
            'boca',
            {
              lip: 'labio',
              tongue: 'lengua',
              tooth: 'diente'
            }
          ],
          cheek: 'mejilla',
          chin: 'barbilla',
          beard: 'barba',
          mustache: 'bigote'
        }
      ],
      ear: 'oreja',
      hair: 'pelo'
    }
  ],
  neck: 'cuello',
  shoulder: 'hombro',
  back: 'espalda',
  chest: [
    'pecho',
    {
      nipple: 'pezón'
    }
  ],
  arm: [
    'brazo',
    {
      elbow: 'codo',
      forearm: 'antebrazo',
      wrist: 'muñeco',
      hand: 'mano',
      finger: [
        'dedo',
        {
          knuckle: 'artejo',
          fingernail: 'uña'
        }
      ],
      thumb: 'pulgar'
    }
  ],
  belly: 'vientre',
  waist: 'cintura',
  hip: 'cadera',
  buttocks: 'nalgas',
  leg: [
    'pierna',
    {
      thigh: 'muslo',
      knee: 'rodilla',
      calf: 'pantorrilla',
      foot: 'pie',
      ankle: 'tobillo',
      toe: [
        'dedo',
        {
          toenail: 'uña'
        }
      ]
    }
  ]
}

export default () => {
  return (
    <div style={{padding: '0.5vmax 2vmax'}}>
      <Tree data={bodyParts} />
    </div>
  )
}