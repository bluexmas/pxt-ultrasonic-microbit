//% icon="\uf26c"
//% color="255" weight="90"
namespace ultrasonic {
	
	  /**
	   * initialises the ultrasonic
	   */
	  //% blockId=ultrasonic_init
	  //% block="Ultrasonic TrigPin = %trigPin|, EchoPin = %echoPin|" 
    //% shim=ultrasonic::init
    export function init(trigPin: Pins, echoPin: Pins): void{
        return;
    }
    
		/**
	   * Generates the trigger pulse of 10us on the trigger PIN.
	   */
	  //% blockId=ultrasonic_start
	  //% block="Ultrasonic Start" 
	  //% shim=ultrasonic::start
    export function start(): void{
        return;
    }

	  /**
	  * Return the distance from obstacle in cm
	  */
	  //% blockId=ultrasonic_get_dist_cm
	  //% async
	  //% block="Return the distance from obstacle in cm" 
	  //% shim=ultrasonic::get_dist_cm
    export function get_dist_cm(): number{
        return;
    }
}
