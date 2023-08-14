import React from 'react'
// import horizontal1 from "../../images/homepage/horizontal_test.jpg"
// import horizontal2 from "../../images/homepage/horizontal_test2.jpg"
// import horizontal3 from "../../images/homepage/horizontal_test3.jpg"
// import vertical from "../../images/homepage/vertical_test.jpg"
// import square from "../../images/homepage/square_test_1.jpg"
import { StaticImage } from "gatsby-plugin-image" 

import dfw_dawn from "../../images/homepage/dfw_dawn.jpg"
import antelope_canyon from "../../images/homepage/antelope_canyon.jpg" 
import horses_1 from "../../images/homepage/horses_1.jpg" 
import jess_arches from "../../images/homepage/jess_arches.jpg" 
import red_plane_color from "../../images/homepage/red_plane_color.jpg" 
import jess_lopresti from "../../images/homepage/jess_lopresti.jpg"
import chicago_riverwalk_1 from   "../../images/homepage/chicago_riverwalk_1.jpg"
import plane_fireball_sun from "../../images/homepage/plane_fireball_sun.jpg"
import bryce_canyon_3 from "../../images/homepage/bryce_canyon_3.jpg"
import zion_jess_1 from "../../images/homepage/zion_jess_1.jpg"
import white_sands_jess_red from "../../images/homepage/white_sands_jess_1.jpg"
import oak_street_jump from "../../images/homepage/oak_street_jump.jpg"
import retro_diner_car from "../../images/homepage/retro_diner_car.jpg"
import arches_dawn_2 from "../../images/homepage/arches_dawn_2.jpg"
import jackson_cta from "../../images/homepage/jackson_edited.jpg"
import womans_march from "../../images/homepage/womans_march.jpg"
import blue_angels from "../../images/homepage/blue_angels.jpg"
import riverwalk_boat from "../../images/homepage/riverwalk_boat.jpg"
import otter_creek from "../../images/homepage/otter_creek.jpg"
import big_bend_cotopaxi_1 from "../../images/homepage/big_bend_cotopaxi_1.jpg"
import big_bend_1 from "../../images/homepage/big_bend_1.jpg"
import damn from "../../images/homepage/damn.jpg"
import bmw_vail from "../../images/homepage/bmw_vail.jpg"
import delta_tetons from "../../images/homepage/delta_tetons.jpg"
import bisti from "../../images/homepage/bisti_alien_throne.jpg"
import bisti1 from "../../images/homepage/bisti_alien_throne2.jpg"
import organ_needles_jess from "../../images/homepage/organ_needles_jess.jpg"
import pch_buoy_seals from "../../images/homepage/channel_islands_seals.jpg"
import pch_subie_wheeler from "../../images/homepage/pch_subie_wheeler.jpg"
import crater_lake_sky_lakes_wilderness from "../../images/homepage/crater_lake_sky_lakes_wilderness.jpg"
import rialto_hole_in_the_wall from "../../images/homepage/rialto_hole_in_the_wall.jpg"
import sf_chinatown_motion from "../../images/homepage/sf_chinatown_motion.jpg"
import alstrom_point from "../../images/homepage/alstrom_point.jpg"
import miami_grand_prix_red_bull from "../../images/homepage/miami_grand_prix_red_bull.jpg"
import subie_alstrom from "../../images/homepage/subie_alstrom1.jpg"
import joshua_tree from "../../images/homepage/joshua_tree.jpg"
import dead_horse_point from "../../images/homepage/dead_horse_point_c.jpg"


// import np_white_sands_horses_1 from "../../images/homepage/np_white_sands_horses_1.jpg" 
// import np_white_sands_horses_2 from "../../images/homepage/np_white_sands_horses_2.jpg" 
// import capitol_reef_sunset from "../../images/homepage/capitol_reef_sunset.jpg" 
// import cabrillo_sunset from "../../images/homepage/cabrillo_sunset.jpg" 
// import monument_valley from "../../images/homepage/monument_valley.jpg" 
// import city from "../../images/homepage/city.jpg" 
// import morning_tetons from "../../images/homepage/morning_tetons.jpg" 
// import horses from "../../images/homepage/horses.jpg" 
// import los_lunas_sunset from "../../images/homepage/los_lunas_sunset.jpg" 
// import violin_ohare from "../../images/homepage/violin_ohare.jpg" 
// import chicago_boat_skyline from "../../images/homepage/chicago_boat_skyline.jpg"
// import chicago_riverwalk_2 from   "../../images/homepage/chicago_riverwalk_2.jpg"
// import chatt_sunset from "../../images/homepage/chatt_sunset.jpg"
// import ohare_sunset_sun from "../../images/homepage/ohare_sunset_sun.jpg"
// import bryce_canyon_1 from "../../images/homepage/bryce_canyon_1.jpg"
// import bryce_canyon_2 from "../../images/homepage/bryce_canyon_2.jpg"
// import bryce_canyon_fog from "../../images/homepage/bryce_canyon_fog.jpg"
// import uchicago_quad from "../../images/homepage/uchicago_quad.jpg"
// import chicago_station from "../../images/homepage/chicago_station.jpg"
// import tn_bridge_sunset from "../../images/homepage/tn_bridge_sunset.jpg"
// import arches_dawn from "../../images/homepage/arches_dawn.jpg"
// import dead_horse_point from "../../images/homepage/dead_horse_point_c.jpg"
// import yezzir from "../../images/homepage/yezzir.jpg"
// import dangelo from "../../images/homepage/dangelo.jpg"
// import bicycle_snow from "../../images/homepage/bicycle_snow.jpg"
// import mansu from "../../images/homepage/mansu.jpg"
// import milwaukee_museum_couple from "../../images/homepage/milwaukee_museum_couple.jpg"
// import otter_creek_bus from "../../images/homepage/otter_creek_bus.jpg"
// import zion_2 from "../../images/homepage/zion_2.jpg"
// import big_bend_sunset_jess from "../../images/homepage/big_bend_1.jpg"
// import big_bend_santa_elena_large from "../../images/homepage/big_bend_santa_elena.jpg"
// import wilson_arch from "../../images/homepage/wilson_arch.jpg"
// import beemer_vail from "../../images/homepage/beemer_vail.jpg"
// import antelope_canyon_swirl from "../../images/homepage/antelope_canyon_swirl.jpg"
// import capitol_reef_north_face from "../../images/homepage/capitol_reef_north_face_1.jpg"
// import black_canyon_1 from "../../images/homepage/black_canyon_1.jpg"
// import jet_ohare_sunset from "../../images/homepage/jet_ohare_sunset.jpg"
// import motel from "../../images/homepage/motel.jpg"

// NEED COMPRESSION
// import monument_valley_unedited_large from "../../images/homepage/monument_valley_unedited_large.jpg"
 
const HomepageGallery = class extends React.Component {
  render() {
    return (
      <div>
        <div className="gallery-homepage">
          <div className='gallery-container'>
            
            {/* FIRST GALLERY */}
            <div className='gallery-preset gallery-preset-3'>

              <div className="gallery preset-3-one">
                <StaticImage src="../../images/homepage/red_plane_color.jpg"  alt=""/>
              </div>

              <div className="gallery preset-3-two">
                <StaticImage src="../../images/homepage/antelope_canyon.jpg"  alt=""/>
              </div>

              <div className="gallery preset-3-three">
                <StaticImage src="../../images/homepage/sf_chinatown_motion.jpg"  alt=""/>
              </div>

              <div className="gallery gallery-link preset-3-four">
                <a href='/404' class='gallery-title'>
                  <h2>Parks</h2>
                  <img src={arches_dawn_2} loading="lazy"></img>
                </a>
              </div>

              <div className="gallery preset-3-four">
              </div>

              <div className="gallery preset-3-five">
                <StaticImage src="../../images/homepage/plane_fireball_sun.jpg"  alt=""/>
              </div>

              <div className="gallery preset-3-six">
                <StaticImage src="../../images/homepage/miami_grand_prix_red_bull.jpg" alt=""/> 
              </div>

            </div>

            {/* SECOND GALLERY */}
            <div className='gallery-preset gallery-preset-fullwidth'>

              <div className="gallery preset-fullwidth">
                <StaticImage src="../../images/homepage/bisti_alien_throne2.jpg" loading="lazy" alt=""/> 
              </div>

            </div>
            
            {/* THIRD GALLERY */}
            <div className='gallery-preset gallery-preset-8'>

              <div className="gallery preset-8-one">
                <img src={chicago_riverwalk_1} loading="lazy"></img>
              </div>

              <div className="gallery preset-8-two">
                <img src={oak_street_jump} loading="lazy"></img>
              </div>
              
              <div className="gallery preset-8-three">
                <img src={blue_angels} loading="lazy"></img>
              </div>

            </div>

            {/* FOURTH GALLERY */}
            <div className='gallery-preset gallery-preset-5'>

              <div className="gallery preset-5-one">
                <img src={womans_march} loading="lazy"></img>
              </div>

              <div className="gallery preset-5-two">
                <img src={jackson_cta} loading="lazy"></img>
              </div>

            </div>

            {/* FIFTH GALLERY */}
            <div className='gallery-preset gallery-preset-fullwidth'>

              <div className="gallery preset-fullwidth">
                <img src={otter_creek} loading="lazy"></img>
              </div>

            </div>

            {/* SIXTH GALLERY */}
            <div className='gallery-preset gallery-preset-7'>

              <div className="gallery preset-7-one">
                <img src={bryce_canyon_3} loading="lazy"></img>
              </div>

              <div className="gallery preset-7-two">
                <img src={big_bend_cotopaxi_1} loading="lazy"></img>
              </div>
              
              <div className="gallery preset-7-three">
                <img src={riverwalk_boat} loading="lazy"></img>  
              </div>

              <div className="gallery preset-7-four">
                <img src={jess_arches} loading="lazy"></img>  
              </div>

            </div>

            {/* SEVENTH GALLERY */}
            <div className='gallery-preset gallery-preset-fullwidth'>

              <div className="gallery preset-fullwidth">
                <img src={dfw_dawn} loading="lazy"></img>
              </div>

            </div>

            {/* EIGHTH GALLERY */}
            <div className='gallery-preset gallery-preset-5'>

              <div className="gallery preset-5-one">
                <img src={jess_lopresti} loading="lazy"></img>
              </div>

              <div className="gallery preset-5-two">
                <img src={bmw_vail} loading="lazy"></img>
              </div>

            </div>

            {/* NINTH GALLERY */}
            <div className='gallery-preset gallery-preset-fullwidth'>

              <div className="gallery preset-fullwidth">
                <img src={delta_tetons} loading="lazy"></img>
              </div>

            </div>

            {/* TENTH GALLERY */}
            <div className='gallery-column-template gallery-column-2'>

              <div className="gallery">
                <img src={retro_diner_car} loading="lazy"></img>
              </div>

              <div className="gallery">
                <img src={horses_1} loading="lazy"></img>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default HomepageGallery