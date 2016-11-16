
#ifndef FD_H
#define FD_H

class FourierDescriptor{

public:
			FourierDescriptor(Mat);
			~FourierDescriptor();
			
			Mat getFourierDescriptor();

private:
			Mat fourierDescriptor;
			Mat original;
			
			void computeFourierDescritpor();
}



#endif
