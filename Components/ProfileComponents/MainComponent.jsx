"use client"
import React, { useState } from 'react'
import "./MainComponent.css"
import Image from 'next/image'
import Notification from "../../public/Notification.png"
import Profile from "../../public/Profile_pic.png"
import Arrow from "../../public/arrow-up.png"
import Search from "../../public/search.png"
import Sort from "../../public/sort.png"
import Edit from "../../public/edit.png"
import Download from "../../public/el_download.png"
import Graph from "../../public/graph.png"
import Eye from "../../public/eye.png"
import Delete from "../../public/del.png"
import Dots from  "../../public/3dot.png"
import MobSort from  "../../public/mob_sort.png"
import right from  "../../public/right_arrow.png"
import Left from  "../../public/left.png"








export default function MainComponent() {
  const [isCompanyInfoVisible, setCompanyInfoVisible] = useState(false);
  const [mobileTableHeight, setMobileTableHeight] = useState(40);

  const toggleCompanyInfo = () => {
    setCompanyInfoVisible(!isCompanyInfoVisible);
    setMobileTableHeight(isCompanyInfoVisible ? 40 : 120); 
  };

  

  return (
    <>
    <div className='main_component'>
      <div className='profile_details'>
        <div className='name'>
          <p className='user_name'>Hello Emma!</p>
          <p className='qr_code'>Let's Create Qr Codes</p>
        </div>
        <div className='notification'>
          <Image src={Notification} alt='' width={35} height={25} objectFit='contain' />
          <Image src={Profile} alt='' width={35} height={25} objectFit='contain' />
          <p className='profile_name'>Emma Miller</p>
          <Image src={Arrow} alt='' width={15} height={15} objectFit='contain' />
        </div>

      </div>
      <div className='subscription'>
        <p className='sub_text'>Your subscription has expired! -<span className='span_text'>To reactivate, renew your subscription.</span></p>
        <div className='renew'>
          Renew Now
        </div>
      </div>
      <div className='line'></div>
      <div className='qr_code_headings'>
        <h3>My QR Codes</h3>
        <p>You can Create, Customize, View, Edit, Share & Download your QR Codes.</p>
      </div>
      <div className='filters'>
        <div className='inputs'>
          <input className='search' type='text' placeholder='Search' />
          <div className='search_logo'>
            <Image src={Search} alt='' width={20} height={20} />
          </div>
          <div className='sort'>
            <Image src={Sort} alt='' width={20} height={20} />
            Sort by
          </div>

        </div>
        <button className='create_btn'>+ Create QR Code</button>
      </div>
      <div className='table_header'>
        <div className='check_field'>
          <div className='check'>-</div>
        </div>
        <div className='qr_code_name'>QR Code Name</div>
        <div className='category'>Category</div>
        <div className='type'>Type</div>
        <div className='last_modified'>Last Modified</div>
        <div className='actions'>Actions</div>

      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>
      <div className='table_data'>
        <div className='checkbox_field'>
          <input type='checkbox' className='check_input' />
        </div>
        <div className='company_name'>
          Boroplus
        </div>
        <div className='website'>
          Website URL
        </div>
        <div className='dynamic'>
         <span>Dynamic</span>
        </div>
        <div className='time'>10 min ago</div>
        <div className='company_actions'>
          <div className='edit'>
          <Image src={Edit} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={15} height={15} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={15} height={15} />
          </div>
        </div>


      </div>

      <div className='bottom_container'>
          <button className='prev_btn'>Previous page</button>
          <div className='paginate'>page <span>1</span> of 10</div>
          <button className='next_btn'>Next page</button>
      </div>

    </div>

    <div className='mobile_content'>
      <div style={{padding:10,width:'90%',margin:'auto'}}>
      <p className='create_qr'>+ create QR Code</p>
      <p className='my_qr_mobile'>My QR Codes</p>
      <p className='myqr_para'>You can Create, Customize, View, Edit, Share & Download your QR Codes.</p>
      <div className='search_logo_mobile'>
      <input className='search' type='text' placeholder='Search' />
            <Image src={Search} alt='' width={20} height={20} style={{position:'absolute',top:10}} />
            <Image src={MobSort} alt='' width={20} height={20}  style={{marginLeft:10,objectFit:"contain"}} />
          </div>
      </div>
      <div className='heading_text'>
      <p className='text_name'>Name</p>
      <p className='text_name'>QR Number</p>
      </div>
      <div className='mobile_table' style={{ height: `${mobileTableHeight}px` }}>
        <div className='company_info'>
        <div className='dot'></div>
        <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Boroplus</p>
        <p className='text_name'>Website URL</p>
        <div>
        <Image src={Dots} alt='' width={20} height={20} onClick={toggleCompanyInfo}/>
        </div>
        </div>
     
         {isCompanyInfoVisible && (
          <>
              <hr style={{width:'90%',margin:'auto',backgroundColor:"#D1D1D1"}}/>
        <div className='company_details'>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>category</p>
            <p className='text_name' style={{marginLeft:45}}>website URL</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Type</p>
            <p className='text_name' style={{marginLeft:70}}>Dynamic</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Actions</p>
            <div className='text_name' style={{marginLeft:45}}>
            <div className='company_action'>
          <div className='edit'>
          <Image src={Edit} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={10} height={10} />
          </div>
        </div>
            </div>
           </div>
        </div>
        </>
          )}
        
      </div>
      <div className='mobile_table' style={{ height: `${mobileTableHeight}px` }}>
        <div className='company_info'>
        <div className='dot'></div>
        <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Boroplus</p>
        <p className='text_name'>Website URL</p>
        <div>
        <Image src={Dots} alt='' width={20} height={20} onClick={toggleCompanyInfo}/>
        </div>
        </div>
     
         {isCompanyInfoVisible && (
          <>
              <hr style={{width:'90%',margin:'auto',backgroundColor:"#D1D1D1"}}/>
        <div className='company_details'>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>category</p>
            <p className='text_name' style={{marginLeft:45}}>website URL</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Type</p>
            <p className='text_name' style={{marginLeft:70}}>Dynamic</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Actions</p>
            <div className='text_name' style={{marginLeft:45}}>
            <div className='company_action'>
          <div className='edit'>
          <Image src={Edit} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={10} height={10} />
          </div>
        </div>
            </div>
           </div>
        </div>
        </>
          )}
        
      </div>
      <div className='mobile_table' style={{ height: `${mobileTableHeight}px` }}>
        <div className='company_info'>
        <div className='dot'></div>
        <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Boroplus</p>
        <p className='text_name'>Website URL</p>
        <div>
        <Image src={Dots} alt='' width={20} height={20} onClick={toggleCompanyInfo}/>
        </div>
        </div>
     
         {isCompanyInfoVisible && (
          <>
              <hr style={{width:'90%',margin:'auto',backgroundColor:"#D1D1D1"}}/>
        <div className='company_details'>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>category</p>
            <p className='text_name' style={{marginLeft:45}}>website URL</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Type</p>
            <p className='text_name' style={{marginLeft:70}}>Dynamic</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Actions</p>
            <div className='text_name' style={{marginLeft:45}}>
            <div className='company_action'>
          <div className='edit'>
          <Image src={Edit} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={10} height={10} />
          </div>
        </div>
            </div>
           </div>
        </div>
        </>
          )}
        
      </div>
      <div className='mobile_table' style={{ height: `${mobileTableHeight}px` }}>
        <div className='company_info'>
        <div className='dot'></div>
        <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Boroplus</p>
        <p className='text_name'>Website URL</p>
        <div>
        <Image src={Dots} alt='' width={20} height={20} onClick={toggleCompanyInfo}/>
        </div>
        </div>
     
         {isCompanyInfoVisible && (
          <>
              <hr style={{width:'90%',margin:'auto',backgroundColor:"#D1D1D1"}}/>
        <div className='company_details'>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>category</p>
            <p className='text_name' style={{marginLeft:45}}>website URL</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Type</p>
            <p className='text_name' style={{marginLeft:70}}>Dynamic</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Actions</p>
            <div className='text_name' style={{marginLeft:45}}>
            <div className='company_action'>
          <div className='edit'>
          <Image src={Edit} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={10} height={10} />
          </div>
        </div>
            </div>
           </div>
        </div>
        </>
          )}
        
      </div>
      <div className='mobile_table' style={{ height: `${mobileTableHeight}px` }}>
        <div className='company_info'>
        <div className='dot'></div>
        <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Boroplus</p>
        <p className='text_name'>Website URL</p>
        <div>
        <Image src={Dots} alt='' width={20} height={20} onClick={toggleCompanyInfo}/>
        </div>
        </div>
     
         {isCompanyInfoVisible && (
          <>
              <hr style={{width:'90%',margin:'auto',backgroundColor:"#D1D1D1"}}/>
        <div className='company_details'>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>category</p>
            <p className='text_name' style={{marginLeft:45}}>website URL</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Type</p>
            <p className='text_name' style={{marginLeft:70}}>Dynamic</p>
           </div>
           <div style={{display:'flex',alignItems:'center',marginLeft:40,marginTop:5}}>
            <p className='text_name' style={{color:'#000000',fontWeight:'bold'}}>Actions</p>
            <div className='text_name' style={{marginLeft:45}}>
            <div className='company_action'>
          <div className='edit'>
          <Image src={Edit} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Download} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Graph} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Eye} alt='' width={10} height={10} />
          </div>
          <div className='edit'>
          <Image src={Delete} alt='' width={10} height={10} />
          </div>
        </div>
            </div>
           </div>
        </div>
        </>
          )}
        
      </div>
      <div className='arrows'>
        <div className='previous'>
        <Image src={Left} alt='' width={10} height={10} />
        </div>
        <div className='paginate_mobile'>page <span>1</span> of 10</div>
        <div className='nextpage'>
        <Image src={right} alt='' width={10} height={10} /></div>

      </div>
    </div>
    </>
  )
}
