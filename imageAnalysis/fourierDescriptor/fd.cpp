
#include "fd.h"


/*
Constructor

*/
FourierDescriptor::FourierDescriptor(Mat xinput) {
	original = xinput;
	computeFourierDescriptor();
}



/*
Constructor

*/
FourierDescriptor::~FourierDescriptor() {



}
			
			
			
			
Mat FourierDescriptor::getFourierDescriptor() {
	return fourierDescriptor;
}


void FourierDescriptor::computeFourierDescriptor() {



}
