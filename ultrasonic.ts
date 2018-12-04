//% color=50 weight=80
//% icon="\uf3b2"
namespace Ultrasonic {

	//% block="initialise4(%trigPin, %echoPin)"
	//% blockId=ultrasonic_init shim=Ultrasonic::init
    export function init(trigPin: Pins, echoPin: Pins) : void {
		//shim
	}
	
	//% block="start"
	//% blockId=ultrasonic_start shim=Ultrasonic::start
    export function start(): void {
		//shim
	}

	//% block="get_dist_cm (in cm)"
	//% blockId=ultrasonic_get_dist_cm shim=Ultrasonic::get_dist_cm
	export function get_dist_cm() : number {
		//shim
		return 0;
	}

	//% block="sum (%value1, %value2)"
	//% blockId=ultrasonic_sum shim=Ultrasonic::sum
	export function sum(value1 : number, value2 : number) : number {
		//shim
		return 0;
	}

}
