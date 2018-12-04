//% color=50 weight=80
//% icon="\uf3b2"
namespace Ultrasonic {

    /**
     * initialises 
     * @param trigPin trigPin (in pixels), eg: 64
     * @param echoPin echoPin (in pixels), eg: 128
     */
	//% block="initialise(%trigPin, %echoPin)"
	//% blockId=ultrasonic_init shim=Ultrasonic::init
    export function init(trigPin: Pins, echoPin: Pins) : void {
		//shim
	}
	
	/**
	* start.
	**/
	//% block="start"
	//% blockId=ultrasonic_start shim=Ultrasonic::start
    export function start(): void {
		//shim
	}

	/**
	* Returns the distance detected by the get_dist_cm (in cm).
	**/
	//% block="get_dist_cm (in cm)"
	//% blockId=ultrasonic_get_dist_cm shim=Ultrasonic::get_dist_cm
	export function get_dist_cm() : number {
		//shim
		return 0;
	}

}
