cmake_minimum_required (VERSION 2.8)
project ( fourierDescriptor.out )

 
#
# OpenCV Packaage
find_package( OpenCV REQUIRED )

 
# add the binary tree to the search path for include files
# so that we will find TutorialConfig.h
include_directories("${PROJECT_BINARY_DIR}")


# add the executable
# and link OpenCV Lib.
add_executable(fourierDescriptor.out main.cpp fd.cpp fd.h)
target_link_libraries( fourierDescriptor.out ${OpenCV_LIBS})
