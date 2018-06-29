var div;

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'style.css');
document.getElementsByTagName('head')[0].appendChild(link);
var x1,x2,x3,x4,y1,y2,y3,y4,z1,z2,z3,total;


var magnet1;
var magnet2;
var magnet3;
var magnet4;
var geometry;
var m1x;
var m1y;
var m2x;
var m2y;
var m3x,m3y,m4x,m4y;
var upm1x;
var upm1y;
var upm2x;
var upm2y;
var upm3x;
var upm3y;
var upm4x;
var upm4y;
var rate=0.2
var yval;
var endx=5.9;
var val1,val2,val3,val4;
var text1,text2,text3,text4;
var lines4,lines3,lines2,lines1;
function initialiseScene(){


}

function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("Simple attraction and repulsion between magnets");
    PIEsetDeveloperName("Bonthu Badrinath");
    
    initialiseHelp();
    initialiseInfo();

    initialiseScene();
    initialiseControls();
    // PIEsetAreaOfInterest(-6, 6, 6, -6);
     PIEsetAreaOfInterest(-8, 8, 8, -8);
     PIEscene.background=new THREE.Color( 0x48294b );
    initialiseOtherVariables();
    //edb657

    geometry=new THREE.PlaneGeometry(35,25);
    var back=createMesh(geometry,"back.jpg");
    back.position.set(0,-5.1,0);
    PIEaddElement(back);
    back.visible=true;
    PIErender();

    geometry=new THREE.PlaneGeometry(18,6);
    var backtable=createMesh(geometry,"tablev1.png");
    backtable.position.set(0,-5.1,0);
    PIEaddElement(backtable);
    backtable.visible=true;
    PIErender();


    //magnet1 png
    geometry=new THREE.PlaneGeometry(4,1);
    magnet1=createMesh(geometry,"magnet1.png");
    magnet1.position.set(m1x,m1y,0);
    PIEaddElement(magnet1);
    magnet1.visible=true;
    PIErender();
    PIEdragElement(magnet1);
    PIEsetDrag(magnet1, myBallDrag1);

    geometry=new THREE.PlaneGeometry(4,1);
    magnet2=createMesh(geometry,"magnet1.png");
    magnet2.position.set(m2x,m2y,0);
    PIEaddElement(magnet2);
    magnet2.visible=true;
    PIErender();
    PIEdragElement(magnet2);
    PIEsetDrag(magnet2, myBallDrag2);

    geometry=new THREE.PlaneGeometry(4,1);
    magnet3=createMesh(geometry,"magnet2.png");
    magnet3.position.set(m3x,m3y,0);
    PIEaddElement(magnet3);
    magnet3.visible=false;
    PIErender();
    PIEdragElement(magnet3);
    PIEsetDrag(magnet3, myBallDrag3);

    geometry=new THREE.PlaneGeometry(4,1);
    magnet4=createMesh(geometry,"magnet2.png");
    magnet4.position.set(m4x,m4y,0);
    PIEaddElement(magnet4);
    magnet4.visible=false;
    PIErender();
    PIEdragElement(magnet4);
    PIEsetDrag(magnet4, myBallDrag4);

    geometry=new THREE.PlaneGeometry(10,5);
    lines4=createMesh(geometry,"snns.png");
    lines4.position.set(0,4,0);
    PIEaddElement(lines4);
    lines4.visible=false;
    PIErender();

    geometry=new THREE.PlaneGeometry(10,5);
    lines3=createMesh(geometry,"nsns.png");
    lines3.position.set(0,4,0);
    PIEaddElement(lines3);
    lines3.visible=false;
    PIErender();

    geometry=new THREE.PlaneGeometry(10,5);
    lines2=createMesh(geometry,"nssn.png");
    lines2.position.set(0,4,0);
    PIEaddElement(lines2);
    lines2.visible=false;
    PIErender();

    geometry=new THREE.PlaneGeometry(10,5);
    lines1=createMesh(geometry,"snsn.png");
    lines1.position.set(0,4,0);
    PIEaddElement(lines1);
    lines1.visible=false;
    PIErender();


    
    
    var total=document.createElement('div');
 total.setAttribute('id', 'total');

var y= document.createElement("H1");
    var t0 = document.createTextNode("Enter 1 for attraction & 2 for repulsion");
     y.setAttribute('id', 'text');
    y.appendChild(t0);
    document.body.appendChild(y);

var z1= document.createElement("H1");
    var  l1= document.createTextNode("Magnet1");
     z1.setAttribute('id', 'tex1');
    z1.appendChild(l1);
    document.body.appendChild(z1);

    var z2= document.createElement("H1");
    var  l2= document.createTextNode("Magnet2");
     z2.setAttribute('id', 'tex2');
    z2.appendChild(l2);
    document.body.appendChild(z2);

    var z3= document.createElement("H1");
    var  l3= document.createTextNode("Observation");
     z3.setAttribute('id', 'tex3');
    z3.appendChild(l3);
    document.body.appendChild(z3);

    // var y= document.createElement("H1");
    // var t0 = document.createTextNode("Enter 1 for attraction & 2 for repulsion");
    //  y.setAttribute('id', 'text');
    // y.appendChild(t0);
    // document.body.appendChild(y);

 var y1 = document.createElement("H2");
    var t1 = document.createTextNode("S-N S-N : ");
     y1.setAttribute('id', 'text1');
    y1.appendChild(t1);
    document.body.appendChild(y1);

    var y2 = document.createElement("H2");
    var t2 = document.createTextNode("N-S S-N : ");
     y2.setAttribute('id', 'text2');
    y2.appendChild(t2);
    document.body.appendChild(y2);

    var y3 = document.createElement("H2");
    var t3 = document.createTextNode("S-N N-S : ");
     y3.setAttribute('id', 'text3');
    y3.appendChild(t3);
    document.body.appendChild(y3);

    var y4 = document.createElement("H2");
    var t4 = document.createTextNode("N-S N-S : ");
     y4.setAttribute('id', 'text4');
    y4.appendChild(t4);
    document.body.appendChild(y4);

 var x1 = document.createElement("INPUT");
    x1.setAttribute("type", "num");
    x1.setAttribute('class','input');
    x1.setAttribute('id', 'input1');
    document.body.appendChild(x1);
    
var x2 = document.createElement("INPUT");
    x2.setAttribute("type", "num");
    x2.setAttribute('class','input');
    x2.setAttribute('id', 'input2');
    document.body.appendChild(x2);

    var x3 = document.createElement("INPUT");
    x3.setAttribute("type", "num");
    x3.setAttribute('class','input');
    x3.setAttribute('id', 'input3');
    document.body.appendChild(x3);

    var x4 = document.createElement("INPUT");
    x4.setAttribute("type", "num");
    x4.setAttribute('class','input');
    x4.setAttribute('id', 'input4');
    document.body.appendChild(x4);

div = document.createElement("div");                            /* div for submit option */
    div.setAttribute('class','label');
    div.setAttribute('id', 'submit');
    div.setAttribute('onclick','submit1()');
    div.innerHTML= "Submit";
    document.body.appendChild(div);



    // PIEcreateTable("Enter 1 for Attraction & 2 for Repulsion",5,3,true);
    // var headerRow = ["Magnet1"," Magnet2 "," Observation"];
    // var Row1=["S-N","S-N","?"];
    // var Row2=["N-S","S-N","?"];
    // var Row3=["S-N","N-S","?"];
    // var Row4=["N-S","N-S","?"];
    // PIEsetCellInput(1,2,1,);
    // PIEsetCellInput(2,2,1,);
    // PIEsetCellInput(3,2,1,);
    // PIEsetCellInput(4,2,1,);
    
    // PIEupdateTableRow(0,headerRow);
    // PIEupdateTableRow(1,Row1);
    // PIEupdateTableRow(2,Row2);
    // PIEupdateTableRow(3,Row3);
    // PIEupdateTableRow(4,Row4);
    // PIEtableSetInputChange(handleTable);

var materialFront = new THREE.MeshBasicMaterial( { color: 0x2dcc22 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom = new THREE.TextGeometry("Correct Observation", 
        {
            size: 0.6, height: 0.1, curveSegments: 1,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text1 = new THREE.Mesh(textGeom, textMaterial );
        text1.position.set(-3.2,4.5,0);
        
        PIEaddElement(text1);
         text1.visible=false;
        PIErender();
        
    });

      
      
        var materialFront1 = new THREE.MeshBasicMaterial( { color: 0xa51717 } );
        var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray1 = [ materialFront1, materialSide ];
    var loader = new THREE.FontLoader();
        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("wrong Observation", 
        {
            size: 0.6, height: 0.1, curveSegments: 1,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray1);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(-3.2,4.5,0);
        
        PIEaddElement(text2);
         text2.visible=false;
        PIErender();
        
    });


        var materialFront1 = new THREE.MeshBasicMaterial( { color: 0xa51717 } );
        var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray1 = [ materialFront1, materialSide ];
    var loader = new THREE.FontLoader();
        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Fill all fields correctly", 
        {
            size: 0.4, height: 0.1, curveSegments: 1,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray1);
        text3 = new THREE.Mesh(textGeom, textMaterial );
        text3.position.set(-2.8,3.5,0);
        
        PIEaddElement(text3);
         text3.visible=false;
        PIErender();
        
    });

// var cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     var cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1,2.4,1.5 ),  cubeMaterial);
//     cube2.rotation.y += 0.4;
//     cube2.rotation.x +=0.15; 
//     cube2.rotation.z+=-0.05;
//     PIEaddElement( cube2 );
//     cube2.position.set(0,0,0);

   
//     var edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+1) );
//    var nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
//     nline.rotation.y += 0.4;
//     nline.rotation.x += 0.15;
//     nline.rotation.z +=-0.05;
//     PIEaddElement( nline );
//     nline.position.set(0,0,0);

// var cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     magnet1 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,0.8,1.2 ),  cubeMaterial);
//     magnet1.rotation.y += -0.25;
//     magnet1.rotation.x +=0.15 ; 
//     magnet1.rotation.z+=0.01;
//     PIEaddElement( magnet1 );
//     magnet1.position.set(-3,0,0);
//     PIEdragElement(magnet1);
//     PIEsetDrag(magnet1, myBallDrag1);

   

    

    PIEstartAnimation();

        
}

function handleTable(row,col,value){
  // if(row==1&&col==2){val1=value;}
  // if(row==2&&col==2){val2=value;}
  // if(row==3&&col==2){val3=value;}
  // if(row==4&&col==2){val4=value;}
  // if(row==3&&col==1){a3=value;}
  // if(row==3&&col==2){b3=value;}
  // if(row==8&&col==0){manualA=value;}
  // if(row==8&&col==1){manualB=value;}
  // if(row==8&&col==2){manualC=value;}

}


function myBallDrag1(element, newpos)
{
    initialiseOtherVariables();
    upm1x=newpos.x;
    upm1y=newpos.y;
    if (newpos.y!=yval) {
            upm1y=m1y;
            if (newpos.x<=-endx) {
                upm1x=-endx;
                }
             if (newpos.x>=endx) {
                upm1x=endx;
                }
             if (magnet2.visible==true) {
              if (newpos.x>=magnet2.position.x-4) {
                        upm1x=magnet2.position.x-4;
                    }
             }
              
             if (magnet4.visible==true) {
              if (newpos.x>=magnet4.position.x-4) {
                        upm1x=magnet4.position.x-4;
                    }
             }
              
            }
     if (newpos.x<=-endx) {
        upm1x=-endx;
    }
     if (newpos.x>=endx) {
                upm1x=endx;
    }
     if (magnet2.visible==true) {
              if (newpos.x>=magnet2.position.x-4) {
                        upm1x=magnet2.position.x-4;
                    }
             }
              
     if (magnet4.visible==true) {
              if (newpos.x>=magnet4.position.x-4) {
                        upm1x=magnet4.position.x-4;
                    }
             }
    
    

    magnet1.position.set(upm1x,upm1y,0);
}



function myBallDrag2(element, newpos)
{
    initialiseOtherVariables();
    upm2x=newpos.x;
    upm2y=newpos.y;
    if (newpos.y!=yval) {
             upm2y=m2y;
             if (newpos.x<=-endx) {
                 upm2x=-endx;
                     }
              if (newpos.x>=endx) {
                 upm2x=endx;
                     }
              if (magnet1.visible==true) {
              if (newpos.x<=magnet1.position.x+4) {
                          upm2x=magnet1.position.x+4;
                      }
             }

              
              if (magnet3.visible==true) {
              if (newpos.x<=magnet3.position.x+4) {
                          upm2x=magnet3.position.x+4;
                      }
             }
              
            
             }
      if (newpos.x<=-endx) {
         upm2x=-endx;
     }
      if (newpos.x>=endx) {
                 upm2x=endx;
     }
      if (magnet1.visible==true) {
              if (newpos.x<=magnet1.position.x+4) {
                          upm2x=magnet1.position.x+4;
                      }
             }
     if (magnet3.visible==true) {
              if (newpos.x<=magnet3.position.x+4) {
                          upm2x=magnet3.position.x+4;
                      }
             }

     magnet2.position.set(upm2x,upm2y,0);
}

function myBallDrag3(element, newpos){
initialiseOtherVariables();
    upm3x=newpos.x;
    upm3y=newpos.y;
    if (newpos.y!=yval) {
            upm3y=m3y;
            if (newpos.x<=-endx) {
                upm3x=-endx;
                }
             if (newpos.x>=endx) {
                upm3x=endx;
                }
              if (magnet2.visible==true) {
              if (newpos.x>=magnet2.position.x-4) {
                        upm3x=magnet2.position.x-4;
                    }
             }
              
              if (magnet4.visible==true) {
              if (newpos.x>=magnet4.position.x-4) {
                        upm3x=magnet4.position.x-4;
                    }
             }
              
            }
     if (newpos.x<=-endx) {
        upm3x=-endx;
    }
     if (newpos.x>=endx) {
                upm3x=endx;
    }
     if (magnet2.visible==true) {
              if (newpos.x>=magnet2.position.x-4) {
                        upm3x=magnet2.position.x-4;
                    }
             }
     if (magnet4.visible==true) {
              if (newpos.x>=magnet4.position.x-4) {
                        upm3x=magnet4.position.x-4;
                    }
             }
   
    magnet3.position.set(upm3x,upm3y,0);
}

function myBallDrag4(element, newpos){
initialiseOtherVariables();
    upm4x=newpos.x;
    upm4y=newpos.y;
    if (newpos.y!=yval) {
             upm4y=m4y;
             if (newpos.x<=-endx) {
                 upm4x=-endx;
                     }
              if (newpos.x>=endx) {
                 upm4x=endx;
                     }
              if (magnet3.visible==true) {
               if (newpos.x<=magnet3.position.x+4) {
                          upm4x=magnet3.position.x+4;
                      }
             }
             
              if (magnet1.visible==true) {
              if (newpos.x<=magnet1.position.x+4) {
                          upm4x=magnet1.position.x+4;
                      }
             }
              
            
             }
      if (newpos.x<=-endx) {
         upm4x=-endx;
     }
      if (newpos.x>=endx) {
                 upm4x=endx;
     }
      if (magnet3.visible==true) {
               if (newpos.x<=magnet3.position.x+4) {
                          upm4x=magnet3.position.x+4;
                      }
             }
             
              if (magnet1.visible==true) {
              if (newpos.x<=magnet1.position.x+4) {
                          upm4x=magnet1.position.x+4;
                      }
             }

     magnet4.position.set(upm4x,upm4y,0);
}



function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}

var play=1;

function updateExperimentElements(t, dt){
    
    
    var d1=(magnet2.position.x-magnet1.position.x);
    var d2=(magnet2.position.x-magnet3.position.x);
    var d3=(magnet4.position.x-magnet1.position.x);
    var d4=(magnet4.position.x-magnet3.position.x);
    var boundary=dt/1000*0.6;
    var play_time = t/1000;
   
    initialiseOtherVariables();


    upm1x=magnet1.position.x;
    upm1y=magnet1.position.y;
    upm2x=magnet2.position.x;
    upm2y=magnet2.position.y;
    upm3x=magnet3.position.x;
    upm3y=magnet3.position.y;

    //attraction SN-SN
    if(magnet1.visible==true && magnet2.visible==true){
       rate=20/(d1);
    if(magnet1.position.x<=magnet2.position.x-4 && magnet2.position.x>=magnet1.position.x+4){
      upm1x=upm1x+boundary*rate;
      upm1y=m1y;
      upm2x=upm2x-boundary*rate;
      upm2y=m2y;
      magnet1.position.set(upm1x,upm1y,0);
      magnet2.position.set(upm2x,upm2y,0);
    }
    else{
       magnet1.position.set(magnet1.position.x,m1y,0);
      magnet2.position.set(magnet2.position.x,m2y,0);
    }
  
  }






//repulsion NS-SN  (magnet3 - magnet2)
  else if(magnet3.visible==true && magnet2.visible==true) {
     rate=20/(d2);
    
    if(magnet3.position.x>=-endx && magnet2.position.x<=endx){
      //if(magnet1.position.x<=magnet2.position.x-4 && magnet2.position.x>=magnet1.position.x+4){
      upm3x=upm3x-boundary*rate;
      upm3y=m3y;
      upm2x=upm2x+boundary*rate;
      upm2y=m2y;
      magnet3.position.set(upm3x,upm3y,0);
      magnet2.position.set(upm2x,upm2y,0);
      }

    else if (magnet3.position.x>=-endx) {
        if (d2<7.5) {
          if (magnet2.position.x<endx) {
            upm2x=upm2x+boundary*rate*4;
            upm2y=m2y;
            magnet2.position.set(upm2x,upm2y,0);
          }
          else{
            upm3x=upm3x-boundary*rate*4;
        upm3y=m3y;
        magnet3.position.set(upm3x,upm3y,0);
          }
          
        }
        else{
        upm3x=upm3x-boundary*rate*2;
        upm3y=m3y;
        magnet3.position.set(upm3x,upm3y,0);
      }
    }

    else if (magnet2.position.x<=endx) {
        if (d2<7.5) {
          if (magnet3.position.x>-endx) {
            upm3x=upm3x-boundary*rate*4;
            upm3y=m3y;
            magnet3.position.set(upm3x,upm3y,0);
          }
          else{
            upm2x=upm2x+boundary*rate*4;
        upm2y=m2y;
        magnet2.position.set(upm2x,upm2y,0);
          }
          
        }
        else{
          upm2x=upm2x+boundary*rate*2;
        upm2y=m2y;
        magnet2.position.set(upm2x,upm2y,0);
        }
        
      }
}







//attraction NS-NS
else  if(magnet3.visible==true && magnet4.visible==true){
       rate=20/(d4);
    if(magnet3.position.x<=magnet4.position.x-4 && magnet4.position.x>=magnet3.position.x+4){
      upm3x=upm3x+boundary*rate;
      upm3y=m3y;
      upm4x=upm4x-boundary*rate;
      upm4y=m4y;
      magnet3.position.set(upm3x,upm3y,0);
      magnet4.position.set(upm4x,upm4y,0);
    }
    else{
       magnet3.position.set(magnet3.position.x,m3y,0);
      magnet4.position.set(magnet4.position.x,m4y,0);
    }
  }






//repulsion SN-NS
else if(magnet1.visible==true && magnet4.visible==true) {
     rate=20/(d3);
    if(magnet1.position.x>=-endx && magnet4.position.x<=endx){
      //if(magnet1.position.x<=magnet2.position.x-4 && magnet2.position.x>=magnet1.position.x+4){
      upm1x=upm1x-boundary*rate;
      upm1y=m1y;
      upm4x=upm4x+boundary*rate;
      upm4y=m4y;
      magnet1.position.set(upm1x,upm1y,0);
      magnet4.position.set(upm4x,upm4y,0);
      }
      else if (magnet1.position.x>=-endx && magnet4.position.x>=endx) {
        if (d3<7.5) {
           if (magnet4.position.x<endx) {
            upm4x=upm4x+boundary*rate*4;
            upm4y=m4y;
            magnet4.position.set(upm4x,upm4y,0);
          }
          else{
            upm1x=upm1x-boundary*rate*4;
        upm1y=m1y;
        magnet1.position.set(upm1x,upm1y,0);
          }
          
        }
        else{
        upm1x=upm1x-boundary*rate*2;
        upm1y=m1y;
        magnet1.position.set(upm1x,upm1y,0);
      }
    }
      else if (magnet4.position.x<=endx && magnet1.position.x<=-endx ) {
        if (d3<7.5) {
          if (magnet1.position.x>-endx) {
            upm1x=upm1x-boundary*rate*4;
            upm1y=m1y;
            magnet1.position.set(upm1x,upm1y,0);
          }
          else{
            upm4x=upm4x+boundary*rate*4;
            upm4y=m4y;
            magnet4.position.set(upm4x,upm4y,0);
          }
          
        }
        else{
          upm4x=upm4x+boundary*rate*2;
        upm4y=m4y;
        magnet4.position.set(upm4x,upm4y,0);
        }
        
      }
    }


    

     if(play_time >= 0.7&&play==1){
        PIEstopAnimation();
        play=0;

        
        }
       

}






function anglechange(){

        
 
}


function initialiseControls(){
    
    PIEaddInputCommand("Flip Left Magnet",flipleft);
    PIEaddInputCommand("Flip Right Magnet",flipright);
    PIEaddInputCommand("Learn",learn);
    // PIEaddInputCommand("Submit Table",submit1);

}

function learn(){
    text2.visible=false;
    text1.visible=false;
    text3.visible=false;
    if (magnet1.visible==true && magnet2.visible==true) {
      lines2.visible=false;
      lines3.visible=false;
      lines4.visible=false;
      lines1.position.set(0,4,0);
      lines1.visible=true;
      //PIEstartAnimation();
      PIErender();
    }
    else if (magnet3.visible==true && magnet2.visible==true) {
      lines3.visible=false;
      lines4.visible=false;
      lines1.visible=false;
      lines2.position.set(0,4,0);
      lines2.visible=true;
      PIErender();
      //PIEstartAnimation();
    }
    else if (magnet3.visible==true && magnet4.visible==true) {
      lines4.visible=false;
      lines1.visible=false;
      lines2.visible=false;
      lines3.position.set(0,4,0);
      lines3.visible=true;
      PIErender();
      //PIEstartAnimation();
    }
    else if (magnet1.visible==true && magnet4.visible==true) {
      lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
      lines4.position.set(0,4,0);
    lines4.visible=true;
    PIErender();
      //PIEstartAnimation();
    }
}

function submit1(){
  val1=document.getElementById("input1").value;
  val2=document.getElementById("input2").value;
  val3=document.getElementById("input3").value;
  val4=document.getElementById("input4").value;

  lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
if(val1=="1" && val2=="2" && val3=="2" && val4=="1"){
    text2.visible=false;
    text3.visible=false;
    text1.position.set(-3.2,4.5,0);
     text1.visible=true;
     //PIEstartAnimation();
     PIErender();
      }
      else{
        text1.visible=false;
        text2.position.set(-3.2,4.5,0);
       text2.visible=true;
       text3.position.set(-2.8,3.5,0);
       text3.visible=true;
       
       PIErender();
       //PIEstartAnimation();
      }
}


function flipleft(){
  lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
     text1.visible=false;
          text2.visible=false;
          text3.visible=false;
  if (magnet1.visible==true) {
    
  upm1x=magnet1.position.x;
  upm1y=magnet1.position.y;
  magnet1.visible=false;
// geometry=new THREE.PlaneGeometry(4,1);
//     magnet3=createMesh(geometry,"magnet2.png");
    magnet3.position.set(upm1x,upm1y,0);
    //PIEaddElement(magnet3);
    magnet3.visible=true;
    PIErender();
    // PIEdragElement(magnet3);
    // PIEsetDrag(magnet3, myBallDrag3);
    //PIEstartAnimation();
  }

  else if(magnet3.visible==true){
   
  upm3x=magnet3.position.x;
  upm3y=magnet3.position.y;
   magnet3.visible=false;
// geometry=new THREE.PlaneGeometry(4,1);
//     magnet1=createMesh(geometry,"magnet1.png");
    magnet1.position.set(upm3x,upm3y,0);
    //PIEaddElement(magnet1);
    magnet1.visible=true;
    PIErender();
    // PIEdragElement(magnet1);
    // PIEsetDrag(magnet1, myBallDrag1);
    //PIEstartAnimation();
  }

  lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
   text2.visible=false;
    text1.visible=false;
    text3.visible=false;
  
}

function flipright(){
 lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
     text1.visible=false;
          text2.visible=false;
          text3.visible=false;
if(magnet2.visible==true){
    upm4x=magnet2.position.x;
    upm4y=magnet2.position.y;
    magnet2.visible=false;
    // geometry=new THREE.PlaneGeometry(4,1);
    // magnet4=createMesh(geometry,"magnet2.png");
    magnet4.position.set(upm4x,upm4y,0);
    // PIEaddElement(magnet4);
    magnet4.visible=true;
    PIErender();
    // PIEdragElement(magnet4);
    // PIEsetDrag(magnet4, myBallDrag4);
     //PIEstartAnimation();
}

else if (magnet4.visible==true) {
     upm2x=magnet4.position.x;
    upm2y=magnet4.position.y;
    magnet4.visible=false;
    // geometry=new THREE.PlaneGeometry(4,1);
    // magnet2=createMesh(geometry,"magnet1.png");
    magnet2.position.set(upm2x,upm2y,0);
    //PIEaddElement(magnet2);
    magnet2.visible=true;
    PIErender();
    // PIEdragElement(magnet2);
    // PIEsetDrag(magnet2, myBallDrag2);
    //PIEstartAnimation();
}
lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
   text2.visible=false;
    text1.visible=false;
    text3.visible=false;
}


function initialiseOtherVariables(){
   yval=-2.75;
   m1x=-4;
   m1y=yval;
   m2x=4;
   m2y=yval;
   m3x=m1x;
   m3y=m1y;
   m4x=m2x;
   m4y=m2y;
}


function resetExperiment(){
  


    lines1.visible=false;
      lines2.visible=false;
      lines3.visible=false;
    lines4.visible=false;
    text2.visible=false;
    text1.visible=false;
    text3.visible=false;
    if (magnet1.visible==true && magnet2.visible==true) {
      magnet1.position.set(m1x,m1y,0);
      magnet2.position.set(m2x,m2y,0);
    }
    else if (magnet1.visible==true && magnet4.visible==true) {
      magnet1.position.set(m1x,m1y,0);
      magnet4.position.set(m4x,m4y,0);
    }
    else if (magnet3.visible==true && magnet4.visible==true) {
      magnet3.position.set(m3x,m3y,0);
      magnet4.position.set(m4x,m4y,0);
    }else if (magnet2.visible==true && magnet3.visible==true) {
      magnet2.position.set(m2x,m2y,0);
      magnet3.position.set(m3x,m3y,0);
    }
   

//     x1.setAttribute('value', '');
// x2.setAttribute('value', '');
// x3.setAttribute('value', '');
// x4.setAttribute('value', '');



   // var headerRow = ["Magnet1"," Magnet2 "," Observation"];
   //  var Row1=["S-N","S-N","?"];
   //  var Row2=["N-S","S-N","?"];
   //  var Row3=["S-N","N-S","?"];
   //  var Row4=["N-S","N-S","?"];
   //  PIEsetCellInput(1,2,1,);
   //  PIEsetCellInput(2,2,1,);
   //  PIEsetCellInput(3,2,1,);
   //  PIEsetCellInput(4,2,1,);
    
   //  PIEupdateTableRow(0,headerRow);
   //  PIEupdateTableRow(1,Row1);
   //  PIEupdateTableRow(2,Row2);
   //  PIEupdateTableRow(3,Row3);
   //  PIEupdateTableRow(4,Row4);
   //  PIEtableSetInputChange(handleTable);
}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Simple attraction and repulsion between magnets</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>This animation shows how attraction and repulsion forces are involved in magnets</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. You can flip the magnet by clicking the buttons in input panel.</p>";
    helpContent = helpContent + "<h3>Working stage</h3>";
    
    helpContent = helpContent + "<p>The experiment works on the priciple that a Magnet attracts or repels other Magnets, depending on their mutual orientation of North and South Poles. When placing like Poles of two Magnets together, the Magnets repel each other. However, if opposite Poles are placed together, they attract each other.</p>";
    helpContent = helpContent + "<p>You need to test each case shown in the Observation table.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li> SN <-> SN</li>";
    helpContent = helpContent + "<li> NS <-> SN</li>";
    helpContent = helpContent + "<li> SN <-> NS</li>";
    helpContent = helpContent + "<li> NS <-> NS</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You need to submit the result in Observation table for every row.</p>";
    // helpContent = helpContent + "<p>F*r=1/2*m*r^2*(accelaration/r)</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li> <b>If you observe attracting force for any case you must write <u>1</u> in Observation table</b></li>";
    helpContent = helpContent + "<li><b> If you observe repulsion force for any case you must write <u>2</u> in Observation table</b></li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p><b>NOTE : </b>If you are having trouble while observing any case, click the learn button in the input panel you will get some explanation to that case.</p>";
    // helpContent = helpContent + "<p>(umgcos(angle))*r=(m/2)*r^2*((2/3)*g* sin(angle))/r</p>";
    // helpContent = helpContent + "<p>umgcos(angle)=(m/2)*(2/3)*g* sin(angle)</p>";
    // helpContent = helpContent + "<p>tan(angle)=3u</p>";
    // helpContent = helpContent + "<p>If you change the angle such that 0 < angle < taninverse(3u) then cylinder begins to roll. There you can understand that the cylinder rolls even for a slight angle.</p>";
    // helpContent = helpContent + "<p>If you change the angle such that angle>taninverse(3u). Then cylinder intially slides(slips) afterwords performs uniform rolling.</p>";
    // helpContent = helpContent + "<h3>Observation stage</h3>";
    // helpContent = helpContent + "<p>On observing static friction, sliding friction, rolling friction forces for different angles it shows that static friction force is always greater than sliding friction force and sliding friction force is always greater than rolling friction force</p>";
    // helpContent = helpContent + "<p></p>";
    // helpContent = helpContent + "<p></p>";
    // helpContent = helpContent + "<p></p>";
    helpContent = helpContent + "<h4>Conclusion</h4>";
    helpContent = helpContent + "<p>After filling the result in observation table(total four rows) you need to submit the table by clicking the submit button in input panel. It verifies whether you observation is correct or not</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment is about attraction and repulsion between magnets.</p>";
    infoContent = infoContent + "<h3>Theory</h3>";
    infoContent = infoContent + "<p>Magnetism is a force of attraction or repulsion that acts at a distance. It is due to a magnetic field, which is caused by moving electrically charged particles. It is also inherent in magnetic objects such as a magnet.</p>";
   //  infoContent = infoContent + "<h3>Sliding Friction</h3>";
    infoContent = infoContent + "<p>A magnet is an object that exhibits a strong magnetic field and will attract materials like iron to it.</p>";
    infoContent = infoContent + "<p>Magnets have two poles, called the north (N) and south (S) poles.</p>";
    infoContent = infoContent + "<p>a Magnet attracts or repels other Magnets, depending on their mutual orientation of North and South Poles. When placing like Poles of two Magnets together, the Magnets repel each other. However, if opposite Poles are placed together, they attract each other.</p>";
   //  infoContent = infoContent + "<h3>Rolling Friction</h3>";
   //  infoContent = infoContent + "<p>Rolling friction is friction that acts on objects when they are rolling over a surface. Rolling friction is much weaker than sliding friction or static friction. This explains why most forms of ground transportation use wheels, including bicycles, cars, 4-wheelers, roller skates, scooters, and skateboards.</p>";
   // // infoContent = infoContent + "<ul><li> </li></ul>";
   //  infoContent = infoContent + "<h3>Static friction is greater than sliding friction</h3>";
   //  infoContent = infoContent + "<p>The friction is due to interlocking of irregularities in two surfaces. when the object starts sliding the contact points on its surface, do not get enough time to lock into the contact points on the floor. So the sliding friction is slightly less than static friction</p>";
   //  infoContent = infoContent + "<h3>Sliding friction is greater than rolling friction</h3>";
   //  infoContent = infoContent + "<p>Rolling friction is the force resisting the motion when a body (such as a ball, tire, or wheel) rolls on a surface. Sliding friction is the force resisting the motion when a body slides on a surface. The force of friction depends on the area of contact between the two surfaces. As the area of contact is less in the case of rolling than in the case of sliding, rolling friction is less than the sliding frictio</p>";
   //  infoContent = infoContent + "<h3> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Static friction > sliding friction > rolling friction</h3>";
    PIEupdateInfo(infoContent);
}







// var chan = document.createElement("li");
//  //chan.className="cr function";
//  chan.width="260px";
// chan.style.fontSize="20px";




// function PIEcreateTable(i, n, g, d) {
//     var c;
//     var b;
//     var m;
//     var f;
//     var a;
//     var h;
//     var l;
//     var k;
//     var j;
//     var e;
//     PIEtableChangeHandlers.push(null);
//     PIEtableNames.push(i);
//     PIEtableRows.push(new Array(0));
//     PIEtableData.push(new Array(0));
//     PIEtableChangeHandlers.push(null);
//     PIEcurrentTable = PIEtableNames.length - 1;
//     c = document.createElement("div");
//     c.draggable = false;
//     c.addEventListener("dragstart", PIEtableDragStart, false);
//     c.style.border = "2px solid white";
//     c.style.borderRadius = "10px";
//     c.style.display = "inline-block";
//     c.style.position = "absolute";
//     c.style.top = "30px";
//     c.style.left="10px";
//     c.style.color = "white";
//     document.body.appendChild(c);
//     b = document.createElement("div");
//     b.style.display = "inline-block";
//     b.style.width = "100%";
//     b.style.padding = "0px";
//     c.appendChild(b);
//     m = document.createElement("p");
//     m.style.display = "inline-block";
//     m.style.width = "100%";
//     m.style.margin = "auto";
//     m.style.border = "2 px solid white";
//     m.style.borderRadius = "10px";
//     m.style.backgroundColor = "#18b4bc";
//     //63aee3#bf6605
//     b.appendChild(m);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../../../PIE/images/TableAdd.png";
//     a.alt = "add";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../../../PIE/images/TableDelete.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     a = document.createElement("span");
//     a.style.padding = "5px";
//     a.style.margin = "auto";
//     a.style.align = "center";
//     a.innerHTML = "<b>" + i + "</b>";
//     m.appendChild(a);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     f.style.align = "right";
//     f.addEventListener("click", PIEtoggleTable, false);
//     m.appendChild(f);
//     a = document.createElement("img");
//     a.src = "../../../PIE/images/TableFold.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f.appendChild(a);
//     a = document.createElement("div");
//     h = document.createElement("table");
//     h.style.display = "inline-block";
//     h.style.border = "1px solid white";
//     h.style.borderRadius = "10px";
//     h.style.paddingTop = "20px";
//     h.style.paddingLeft = "65px";
//     h.style.paddingRight= "65px";
//     h.style.backgroundColor = "#1a1a1a";
//     PIEtables.push(h);
//     a.appendChild(h);
//     c.appendChild(a);
//     for (j = 0; j < n; j++) {
//         for (e = 0; e < g; e++) {
//             if (j == 0) {
//                 k = PIEcreateTableCell(j, e, d)
//             } else {
//                 k = PIEcreateTableCell(j, e, false)
//             }
//         }
//     }
//     PIEupdateTable(PIEtables[PIEcurrentTable])
// }


function PIEcreateInputElement(b, c) {
    var a;
    a = document.createElement("input");
    a.style.color = "#000000";
    //a.style.backgroundColor = "#0060CC";
    a.style.marginLeft="30px";
    a.style.border = "2px solid #18b4bc";
    if (b >= 7) {
        a.size = (b - 6)
    } else {
        a.size = 1
    }
    a.addEventListener("keyup", PIEexpandCell, false);
    if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
        a.addEventListener("change", PIEtableInputChange, false)
    }
    a.addEventListener("change", PIEtableInputChange, false);
    a.value = c;
    return (a)
}

