export const fade={
    hidden:{opacity:0,y:100},
    show:{opacity:1, y:0,transition:{ease:'easeInOut',duration:.5}},
    
};

export const fade1={
    hidden:{opacity:0},
    show:{opacity:1,transition:{ease:'easeInOut',duration:1}},
    
};
export const container={
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:.75,ease:"easeOut",staggerChildren:0.3}}
  };
  

  
export const photoAnimation={
    hidden:{scale:1.1,opacity:0},
    show:{scale:1,opacity:1, transition:{
        ease:'easeOut',
        duration:1,
      
    }}
};  

export const titleAnim={
    hidden:{
      opacity:0, x:200
    },
    show:{
      opacity:1, x:0, transition:{
        duration:2,ease:"easeInOut",
        delay:0.7,
      }
    }
  }
  export const titleAnim1={
    hidden:{x:-450},
    show:{
        x:0,
        transition:{duration:2, ease:"easeOut",delay:1}
    }
  };

  export const pageAnimation={
    hidden:{
        opacity:0,
      
    },
    show:{
        opacity:1,
        transition:{
            duration:0.5,
            when:"beforeChildren",
            staggerChildren:0.25,
        
        },
    },
        exit:{
             opacity:0,
             transition:{
             duration:0.5,
                
                },
            },
        };
