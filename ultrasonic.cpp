#include "pxt.h"
#include "hcsr04.h"

using namespace pxt;

namespace Ultrasonic {

	HCSR04 *hcsr04;

	//%
	void init(DigitalPin trigPin, DigitalPin echoPin) {
		//hcsr04 = new HCSR04((PinName)trigPin, (PinName)echoPin);
	}

	//%
	void start(void) {
		hcsr04->start();
	}

	//%
	int get_dist_cm(void) {
		return hcsr04->get_dist_cm();
	}
}