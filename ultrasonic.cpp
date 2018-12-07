#include "pxt.h"
#include "hcsr04.h"

using namespace pxt;

enum class Pins{
  P0=  0,
  P1=  1,
  P2=  2,
  P3=  3,
  P4=  4,
  P5=  5,
  P6=  6,
  P7=  7,
  P8=  8,
  P9=  9,
  P10= 10,
  P11= 11,
  P12= 12,
  P13= 13,
  P14= 14,
  P15= 15,
  P16= 16,
  P19= 19,
  P20= 20
};

namespace Ultrasonic {

	HCSR04 *hcsr04;

	//%
	void init(Pins trigPin, Pins echoPin) {
		//hcsr04 = new HCSR04(*pxt::getPin(trigPin), *pxt::getPin(echoPin);
		if (hcsr04 != NULL) delete hcsr04;
		hcsr04 = new HCSR04((PinName)trigPin, (PinName)echoPin);
	}

	//%
	void start() {
		hcsr04->start();
	}

	//%
	int get_dist_cm() {
		return hcsr04->get_dist_cm();
	}

	//%
	int sum(int value1, int value2) {
		return value1 + value2;
	}
}