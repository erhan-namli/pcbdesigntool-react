import React from 'react'

const ThreeDView = () => {

  return (
    <div>

        <div    
                className="online_3d_viewer"
                style={{width:"600px", height:"500px" }}
                model="BatteryHolder_MPD_BH-18650-PC2.step"
                environmentmap="build/envmaps/fishermans_bastion/posx.jpg,build/envmaps/fishermans_bastion/negx.jpg,build/envmaps/fishermans_bastion/posy.jpg,build/envmaps/fishermans_bastion/negy.jpg,build/envmaps/fishermans_bastion/posz.jpg,build/envmaps/fishermans_bastion/negz.jpg">
        </div>    

    </div>
  )
}

export default ThreeDView