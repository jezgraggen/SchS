    <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_bch_13_9_3;">
         
   <!--
      <a-entity light="type: ambient; color: #fff; intensity: 0.8"></a-entity> 
      <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-1 1 1"></a-entity>
      <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="1 1 1"></a-entity>  
      <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="1 -1 1"></a-entity> 
      <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-1 -1 1"></a-entity>    
   -->  
               
      <a-marker type="barcode" value="0">
       <a-entity gltf-model="url(https://jezgraggen.github.io/SchS/AR/modelle/001.glb)" scale="0.1 0.1 0.1"></a-entity>
      </a-marker>         

      <a-marker type="barcode" value="1">      
       <a-entity obj-model="obj: url(https://jezgraggen.github.io/SchS/AR/modelle/001.obj); mtl: url(https://jezgraggen.github.io/SchS/AR/modelle/001.mtl)" scale="0.1 0.1 0.1"></a-entity>
      </a-marker>  
      
      <a-marker type="barcode" value="2"> 
       <a-entity obj-model="obj: url(/SchS/AR/modelle/002.obj); mtl: url(/SchS/AR/modelle/002.mtl)" scale="0.1 0.1 0.1"></a-entity>
      </a-marker>  
      <a-entity camera></a-entity>
    </a-scene>
