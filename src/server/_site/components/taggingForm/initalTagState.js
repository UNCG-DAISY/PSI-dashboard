
const initalTagState = {
    devType: -1,
    washoverType: -1,
    damageType: -1,
    impactType: {
      swash:'0',
      collision:'0',
      overwash:'0',
      inundation:'0'
    },
    terrianType: {
      sandyCoastline:'0', 
      marsh:'0', 
      inland:'0', 
      river:'0'
    },
    water: 0,
    comments:''
};

export default initalTagState