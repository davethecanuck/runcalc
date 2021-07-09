/**
 * Road standards are used for distances from 5.0 to 200.0 km.
 * Track standards are used for distances from 1500 to 3000m.
 * World records are used for distances from 60m to 1000m.
 * Track standard for 1500m is used for all distances below.
 *
 * @see http://www.runscore.com/Alan/AgeGrade.html
 * @see https://github.com/AlanLyttonJones/Age-Grade-Tables/blob/master/MaleRoadStd2015.xlsx
 * @see http://www.runscore.com/Alan/MaleTrackStdWMA2005.11.05.XLS
 * @version 2015.01.24
 */
export const MALE_DATA =
{
    // Distances in km
    distance: [
        0.06, 0.1, 0.2, 0.4, 0.8, 1.0, 1.5, 3.0, 5.0, 6.0, 6.437376, 8.0, 8.04672, 10.0, 12.0, 15.0, 16.09344, 20.0, 21.0975, 25.0, 30.0, 42.195, 50.0, 80.46736, 100.0, 150.0, 160.9344, 200.0,
    ],

    // Open standard times
    standard: [
        6.39, 9.58, 19.19, 43.03, 100.91, 131.96, 205.8, 440.67, 779.0, 942.0, 1014.0, 1272.0, 1279.0, 1603.0, 1942.0, 2455.0, 2640.0, 3315.0, 3503.0, 4205.0, 5110.0, 7377.0, 8970.0, 16080.0, 21360.0, 36300.0, 39850.0, 52800.0,
    ],

    // Age factor for each distance, starting from age 5 
    factor: [
        [0.6526, 0.6526, 0.6526, 0.6526, 0.6526, 0.6526, 0.6526, 0.6526, 0.6062, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056, 0.6056],
        [0.6899, 0.6899, 0.6899, 0.6899, 0.6899, 0.6899, 0.6899, 0.6899, 0.6602, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596, 0.6596],
        [0.7250, 0.7250, 0.7250, 0.7250, 0.7250, 0.7250, 0.7250, 0.7250, 0.7102, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096, 0.7096],
        [0.7579, 0.7579, 0.7579, 0.7579, 0.7579, 0.7579, 0.7579, 0.7579, 0.7562, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556, 0.7556],
        [0.7886, 0.7886, 0.7886, 0.7886, 0.7886, 0.7886, 0.7886, 0.7886, 0.7982, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976, 0.7976],
        [0.8171, 0.8171, 0.8171, 0.8171, 0.8171, 0.8171, 0.8171, 0.8171, 0.8362, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356, 0.8356],
        [0.8434, 0.8434, 0.8434, 0.8434, 0.8434, 0.8434, 0.8434, 0.8434, 0.8702, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696, 0.8696],
        [0.8675, 0.8675, 0.8675, 0.8675, 0.8675, 0.8675, 0.8675, 0.8675, 0.9002, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996, 0.8996],
        [0.8894, 0.8894, 0.8894, 0.8894, 0.8894, 0.8894, 0.8894, 0.8894, 0.9262, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256, 0.9256],
        [0.9091, 0.9091, 0.9091, 0.9091, 0.9091, 0.9091, 0.9091, 0.9091, 0.9482, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476, 0.9476],
        [0.9266, 0.9266, 0.9266, 0.9266, 0.9266, 0.9266, 0.9266, 0.9266, 0.9662, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656, 0.9656],
        [0.9419, 0.9419, 0.9419, 0.9419, 0.9419, 0.9419, 0.9419, 0.9419, 0.9802, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796, 0.9796],
        [0.9550, 0.9550, 0.9550, 0.9550, 0.9550, 0.9550, 0.9550, 0.9550, 0.9922, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916, 0.9916],
        [0.9670, 0.9670, 0.9670, 0.9670, 0.9670, 0.9670, 0.9670, 0.9670, 0.9996, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993, 0.9993],
        [0.9790, 0.9790, 0.9790, 0.9790, 0.9790, 0.9790, 0.9790, 0.9790, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9893, 0.9893, 0.9893, 0.9893, 0.9893, 0.9893, 0.9893, 0.9893, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9961, 0.9961, 0.9961, 0.9961, 0.9961, 0.9961, 0.9961, 0.9961, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 0.9996, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9997, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9991, 0.9991, 0.9991, 0.9991, 0.9991, 0.9991, 0.9991, 0.9991, 0.9987, 0.9995, 0.9997, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9975, 0.9975, 0.9975, 0.9975, 0.9975, 0.9975, 0.9975, 0.9975, 0.9970, 0.9983, 0.9987, 0.9996, 0.9996, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9952, 0.9952, 0.9952, 0.9952, 0.9952, 0.9952, 0.9952, 0.9952, 0.9947, 0.9965, 0.9971, 0.9986, 0.9986, 0.9996, 0.9998, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000],
        [0.9922, 0.9922, 0.9922, 0.9922, 0.9922, 0.9922, 0.9922, 0.9922, 0.9918, 0.9940, 0.9948, 0.9968, 0.9969, 0.9984, 0.9989, 0.9994, 0.9995, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998, 0.9998],
        [0.9885, 0.9885, 0.9885, 0.9885, 0.9885, 0.9885, 0.9885, 0.9885, 0.9882, 0.9908, 0.9918, 0.9944, 0.9944, 0.9966, 0.9973, 0.9980, 0.9982, 0.9988, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989, 0.9989],
        [0.9840, 0.9840, 0.9840, 0.9840, 0.9840, 0.9840, 0.9840, 0.9840, 0.9839, 0.9870, 0.9881, 0.9913, 0.9913, 0.9941, 0.9950, 0.9960, 0.9963, 0.9972, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973, 0.9973],
        [0.9788, 0.9788, 0.9788, 0.9788, 0.9788, 0.9788, 0.9788, 0.9788, 0.9790, 0.9824, 0.9837, 0.9874, 0.9875, 0.9908, 0.9920, 0.9932, 0.9936, 0.9948, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950, 0.9950],
        [0.9729, 0.9729, 0.9729, 0.9729, 0.9729, 0.9729, 0.9729, 0.9729, 0.9734, 0.9773, 0.9787, 0.9829, 0.9830, 0.9869, 0.9882, 0.9898, 0.9902, 0.9916, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920, 0.9920],
        [0.9662, 0.9662, 0.9662, 0.9662, 0.9662, 0.9662, 0.9662, 0.9662, 0.9672, 0.9714, 0.9730, 0.9777, 0.9778, 0.9822, 0.9838, 0.9856, 0.9861, 0.9878, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882, 0.9882],
        [0.9592, 0.9592, 0.9592, 0.9592, 0.9592, 0.9592, 0.9592, 0.9592, 0.9605, 0.9649, 0.9666, 0.9719, 0.9720, 0.9769, 0.9786, 0.9807, 0.9813, 0.9832, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837, 0.9837],
        [0.9521, 0.9521, 0.9521, 0.9521, 0.9521, 0.9521, 0.9521, 0.9521, 0.9538, 0.9580, 0.9597, 0.9653, 0.9654, 0.9708, 0.9727, 0.9750, 0.9758, 0.9779, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784, 0.9784],
        [0.9451, 0.9451, 0.9451, 0.9451, 0.9451, 0.9451, 0.9451, 0.9451, 0.9471, 0.9511, 0.9527, 0.9581, 0.9582, 0.9640, 0.9662, 0.9687, 0.9695, 0.9719, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725, 0.9725],
        [0.9380, 0.9380, 0.9380, 0.9380, 0.9380, 0.9380, 0.9380, 0.9380, 0.9404, 0.9442, 0.9457, 0.9509, 0.9510, 0.9566, 0.9589, 0.9616, 0.9625, 0.9651, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658, 0.9658],
        [0.9310, 0.9310, 0.9310, 0.9310, 0.9310, 0.9310, 0.9310, 0.9310, 0.9337, 0.9373, 0.9387, 0.9436, 0.9438, 0.9491, 0.9513, 0.9540, 0.9549, 0.9577, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584, 0.9584],
        [0.9240, 0.9240, 0.9240, 0.9240, 0.9240, 0.9240, 0.9240, 0.9240, 0.9270, 0.9304, 0.9318, 0.9364, 0.9365, 0.9417, 0.9438, 0.9464, 0.9472, 0.9499, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506, 0.9506],
        [0.9169, 0.9169, 0.9169, 0.9169, 0.9169, 0.9169, 0.9169, 0.9169, 0.9203, 0.9235, 0.9248, 0.9292, 0.9293, 0.9342, 0.9362, 0.9387, 0.9396, 0.9422, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428, 0.9428],
        [0.9099, 0.9099, 0.9099, 0.9099, 0.9099, 0.9099, 0.9099, 0.9099, 0.9136, 0.9166, 0.9178, 0.9220, 0.9221, 0.9267, 0.9287, 0.9311, 0.9319, 0.9344, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350, 0.9350],
        [0.9028, 0.9028, 0.9028, 0.9028, 0.9028, 0.9028, 0.9028, 0.9028, 0.9069, 0.9096, 0.9108, 0.9147, 0.9148, 0.9192, 0.9211, 0.9235, 0.9242, 0.9266, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273, 0.9273],
        [0.8958, 0.8958, 0.8958, 0.8958, 0.8958, 0.8958, 0.8958, 0.8958, 0.9002, 0.9027, 0.9038, 0.9075, 0.9076, 0.9117, 0.9136, 0.9158, 0.9166, 0.9189, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195, 0.9195],
        [0.8888, 0.8888, 0.8888, 0.8888, 0.8888, 0.8888, 0.8888, 0.8888, 0.8935, 0.8958, 0.8968, 0.9003, 0.9004, 0.9043, 0.9060, 0.9082, 0.9089, 0.9111, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117, 0.9117],
        [0.8817, 0.8817, 0.8817, 0.8817, 0.8817, 0.8817, 0.8817, 0.8817, 0.8868, 0.8889, 0.8899, 0.8930, 0.8931, 0.8968, 0.8984, 0.9005, 0.9012, 0.9034, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039, 0.9039],
        [0.8747, 0.8747, 0.8747, 0.8747, 0.8747, 0.8747, 0.8747, 0.8747, 0.8801, 0.8820, 0.8829, 0.8858, 0.8859, 0.8893, 0.8909, 0.8929, 0.8935, 0.8956, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961, 0.8961],
        [0.8676, 0.8676, 0.8676, 0.8676, 0.8676, 0.8676, 0.8676, 0.8676, 0.8734, 0.8751, 0.8759, 0.8786, 0.8787, 0.8818, 0.8833, 0.8852, 0.8859, 0.8878, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884, 0.8884],
        [0.8606, 0.8606, 0.8606, 0.8606, 0.8606, 0.8606, 0.8606, 0.8606, 0.8667, 0.8682, 0.8689, 0.8714, 0.8714, 0.8743, 0.8758, 0.8776, 0.8782, 0.8801, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806, 0.8806],
        [0.8536, 0.8536, 0.8536, 0.8536, 0.8536, 0.8536, 0.8536, 0.8536, 0.8600, 0.8613, 0.8619, 0.8641, 0.8642, 0.8669, 0.8682, 0.8700, 0.8705, 0.8723, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728, 0.8728],
        [0.8465, 0.8465, 0.8465, 0.8465, 0.8465, 0.8465, 0.8465, 0.8465, 0.8533, 0.8544, 0.8549, 0.8569, 0.8569, 0.8594, 0.8607, 0.8623, 0.8629, 0.8646, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650, 0.8650],
        [0.8395, 0.8395, 0.8395, 0.8395, 0.8395, 0.8395, 0.8395, 0.8395, 0.8466, 0.8475, 0.8479, 0.8497, 0.8497, 0.8519, 0.8531, 0.8547, 0.8552, 0.8568, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572, 0.8572],
        [0.8324, 0.8324, 0.8324, 0.8324, 0.8324, 0.8324, 0.8324, 0.8324, 0.8399, 0.8406, 0.8410, 0.8424, 0.8425, 0.8444, 0.8456, 0.8470, 0.8475, 0.8490, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495, 0.8495],
        [0.8254, 0.8254, 0.8254, 0.8254, 0.8254, 0.8254, 0.8254, 0.8254, 0.8332, 0.8337, 0.8340, 0.8352, 0.8352, 0.8369, 0.8380, 0.8394, 0.8399, 0.8413, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417, 0.8417],
        [0.8184, 0.8184, 0.8184, 0.8184, 0.8184, 0.8184, 0.8184, 0.8184, 0.8265, 0.8268, 0.8270, 0.8280, 0.8280, 0.8295, 0.8305, 0.8317, 0.8322, 0.8335, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339, 0.8339],
        [0.8113, 0.8113, 0.8113, 0.8113, 0.8113, 0.8113, 0.8113, 0.8113, 0.8198, 0.8199, 0.8200, 0.8208, 0.8208, 0.8220, 0.8229, 0.8241, 0.8245, 0.8258, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261, 0.8261],
        [0.8043, 0.8043, 0.8043, 0.8043, 0.8043, 0.8043, 0.8043, 0.8043, 0.8131, 0.8130, 0.8130, 0.8135, 0.8135, 0.8145, 0.8154, 0.8165, 0.8168, 0.8180, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183, 0.8183],
        [0.7972, 0.7972, 0.7972, 0.7972, 0.7972, 0.7972, 0.7972, 0.7972, 0.8064, 0.8061, 0.8060, 0.8063, 0.8063, 0.8070, 0.8078, 0.8088, 0.8092, 0.8103, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106, 0.8106],
        [0.7902, 0.7902, 0.7902, 0.7902, 0.7902, 0.7902, 0.7902, 0.7902, 0.7997, 0.7992, 0.7991, 0.7991, 0.7991, 0.7995, 0.8003, 0.8012, 0.8015, 0.8025, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028, 0.8028],
        [0.7832, 0.7832, 0.7832, 0.7832, 0.7832, 0.7832, 0.7832, 0.7832, 0.7930, 0.7923, 0.7921, 0.7918, 0.7918, 0.7921, 0.7927, 0.7935, 0.7938, 0.7947, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950, 0.7950],
        [0.7761, 0.7761, 0.7761, 0.7761, 0.7761, 0.7761, 0.7761, 0.7761, 0.7863, 0.7854, 0.7851, 0.7846, 0.7846, 0.7846, 0.7852, 0.7859, 0.7862, 0.7870, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872, 0.7872],
        [0.7691, 0.7691, 0.7691, 0.7691, 0.7691, 0.7691, 0.7691, 0.7691, 0.7796, 0.7785, 0.7781, 0.7774, 0.7774, 0.7771, 0.7776, 0.7782, 0.7785, 0.7792, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794, 0.7794],
        [0.7620, 0.7620, 0.7620, 0.7620, 0.7620, 0.7620, 0.7620, 0.7620, 0.7729, 0.7715, 0.7711, 0.7702, 0.7701, 0.7696, 0.7700, 0.7706, 0.7708, 0.7715, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717, 0.7717],
        [0.7550, 0.7550, 0.7550, 0.7550, 0.7550, 0.7550, 0.7550, 0.7550, 0.7662, 0.7646, 0.7641, 0.7629, 0.7629, 0.7621, 0.7625, 0.7630, 0.7631, 0.7637, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639, 0.7639],
        [0.7479, 0.7479, 0.7479, 0.7479, 0.7479, 0.7479, 0.7479, 0.7479, 0.7592, 0.7577, 0.7571, 0.7557, 0.7557, 0.7547, 0.7549, 0.7553, 0.7555, 0.7559, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561, 0.7561],
        [0.7402, 0.7402, 0.7402, 0.7402, 0.7402, 0.7402, 0.7402, 0.7402, 0.7515, 0.7501, 0.7495, 0.7482, 0.7482, 0.7471, 0.7474, 0.7477, 0.7478, 0.7482, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483, 0.7483],
        [0.7319, 0.7319, 0.7319, 0.7319, 0.7319, 0.7319, 0.7319, 0.7319, 0.7433, 0.7419, 0.7412, 0.7401, 0.7401, 0.7391, 0.7395, 0.7399, 0.7401, 0.7404, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405, 0.7405],
        [0.7230, 0.7230, 0.7230, 0.7230, 0.7230, 0.7230, 0.7230, 0.7230, 0.7344, 0.7331, 0.7323, 0.7314, 0.7314, 0.7305, 0.7310, 0.7315, 0.7317, 0.7322, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324, 0.7324],
        [0.7134, 0.7134, 0.7134, 0.7134, 0.7134, 0.7134, 0.7134, 0.7134, 0.7249, 0.7237, 0.7228, 0.7220, 0.7220, 0.7211, 0.7218, 0.7224, 0.7227, 0.7234, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236, 0.7236],
        [0.7031, 0.7031, 0.7031, 0.7031, 0.7031, 0.7031, 0.7031, 0.7031, 0.7147, 0.7136, 0.7126, 0.7119, 0.7119, 0.7112, 0.7119, 0.7127, 0.7130, 0.7138, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140, 0.7140],
        [0.6923, 0.6923, 0.6923, 0.6923, 0.6923, 0.6923, 0.6923, 0.6923, 0.7040, 0.7028, 0.7018, 0.7012, 0.7012, 0.7005, 0.7013, 0.7022, 0.7026, 0.7035, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038, 0.7038],
        [0.6808, 0.6808, 0.6808, 0.6808, 0.6808, 0.6808, 0.6808, 0.6808, 0.6926, 0.6915, 0.6903, 0.6899, 0.6899, 0.6892, 0.6901, 0.6911, 0.6915, 0.6926, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929, 0.6929],
        [0.6687, 0.6687, 0.6687, 0.6687, 0.6687, 0.6687, 0.6687, 0.6687, 0.6806, 0.6795, 0.6782, 0.6779, 0.6779, 0.6772, 0.6782, 0.6793, 0.6797, 0.6809, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813, 0.6813],
        [0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6680, 0.6668, 0.6655, 0.6653, 0.6653, 0.6646, 0.6656, 0.6668, 0.6673, 0.6686, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689, 0.6689],
        [0.6425, 0.6425, 0.6425, 0.6425, 0.6425, 0.6425, 0.6425, 0.6425, 0.6547, 0.6535, 0.6521, 0.6520, 0.6520, 0.6513, 0.6524, 0.6537, 0.6542, 0.6555, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559, 0.6559],
        [0.6285, 0.6285, 0.6285, 0.6285, 0.6285, 0.6285, 0.6285, 0.6285, 0.6408, 0.6396, 0.6381, 0.6380, 0.6380, 0.6374, 0.6385, 0.6398, 0.6403, 0.6418, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422, 0.6422],
        [0.6138, 0.6138, 0.6138, 0.6138, 0.6138, 0.6138, 0.6138, 0.6138, 0.6263, 0.6250, 0.6235, 0.6235, 0.6235, 0.6228, 0.6239, 0.6253, 0.6258, 0.6273, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277, 0.6277],
        [0.5985, 0.5985, 0.5985, 0.5985, 0.5985, 0.5985, 0.5985, 0.5985, 0.6112, 0.6098, 0.6082, 0.6082, 0.6082, 0.6075, 0.6087, 0.6101, 0.6106, 0.6122, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126, 0.6126],
        [0.5825, 0.5825, 0.5825, 0.5825, 0.5825, 0.5825, 0.5825, 0.5825, 0.5955, 0.5940, 0.5923, 0.5923, 0.5924, 0.5916, 0.5928, 0.5942, 0.5947, 0.5963, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968, 0.5968],
        [0.5660, 0.5660, 0.5660, 0.5660, 0.5660, 0.5660, 0.5660, 0.5660, 0.5791, 0.5775, 0.5758, 0.5758, 0.5758, 0.5750, 0.5762, 0.5776, 0.5782, 0.5798, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802, 0.5802],
        [0.5488, 0.5488, 0.5488, 0.5488, 0.5488, 0.5488, 0.5488, 0.5488, 0.5621, 0.5604, 0.5586, 0.5586, 0.5587, 0.5577, 0.5589, 0.5603, 0.5609, 0.5625, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630, 0.5630],
        [0.5309, 0.5309, 0.5309, 0.5309, 0.5309, 0.5309, 0.5309, 0.5309, 0.5445, 0.5427, 0.5407, 0.5408, 0.5409, 0.5398, 0.5410, 0.5424, 0.5430, 0.5446, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451, 0.5451],
        [0.5124, 0.5124, 0.5124, 0.5124, 0.5124, 0.5124, 0.5124, 0.5124, 0.5262, 0.5243, 0.5223, 0.5223, 0.5224, 0.5213, 0.5224, 0.5238, 0.5244, 0.5259, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265, 0.5265],
        [0.4933, 0.4933, 0.4933, 0.4933, 0.4933, 0.4933, 0.4933, 0.4933, 0.5074, 0.5052, 0.5032, 0.5032, 0.5033, 0.5020, 0.5031, 0.5045, 0.5050, 0.5066, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071, 0.5071],
        [0.4735, 0.4735, 0.4735, 0.4735, 0.4735, 0.4735, 0.4735, 0.4735, 0.4879, 0.4856, 0.4834, 0.4835, 0.4835, 0.4821, 0.4832, 0.4845, 0.4850, 0.4866, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871, 0.4871],
        [0.4531, 0.4531, 0.4531, 0.4531, 0.4531, 0.4531, 0.4531, 0.4531, 0.4678, 0.4653, 0.4630, 0.4630, 0.4631, 0.4616, 0.4626, 0.4638, 0.4644, 0.4658, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664, 0.4664],
        [0.4321, 0.4321, 0.4321, 0.4321, 0.4321, 0.4321, 0.4321, 0.4321, 0.4470, 0.4443, 0.4420, 0.4420, 0.4420, 0.4404, 0.4413, 0.4425, 0.4430, 0.4444, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449, 0.4449],
        [0.4104, 0.4104, 0.4104, 0.4104, 0.4104, 0.4104, 0.4104, 0.4104, 0.4257, 0.4228, 0.4204, 0.4203, 0.4203, 0.4185, 0.4194, 0.4204, 0.4209, 0.4223, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228, 0.4228],
        [0.3881, 0.3881, 0.3881, 0.3881, 0.3881, 0.3881, 0.3881, 0.3881, 0.4037, 0.4005, 0.3981, 0.3979, 0.3980, 0.3960, 0.3968, 0.3977, 0.3982, 0.3994, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000, 0.4000],
        [0.3652, 0.3652, 0.3652, 0.3652, 0.3652, 0.3652, 0.3652, 0.3652, 0.3811, 0.3777, 0.3751, 0.3749, 0.3750, 0.3728, 0.3735, 0.3743, 0.3748, 0.3759, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764, 0.3764],
        [0.3416, 0.3416, 0.3416, 0.3416, 0.3416, 0.3416, 0.3416, 0.3416, 0.3578, 0.3542, 0.3516, 0.3512, 0.3513, 0.3489, 0.3495, 0.3502, 0.3506, 0.3517, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522, 0.3522],
        [0.3174, 0.3174, 0.3174, 0.3174, 0.3174, 0.3174, 0.3174, 0.3174, 0.3340, 0.3301, 0.3273, 0.3269, 0.3270, 0.3244, 0.3249, 0.3255, 0.3258, 0.3267, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273, 0.3273],
        [0.2926, 0.2926, 0.2926, 0.2926, 0.2926, 0.2926, 0.2926, 0.2926, 0.3095, 0.3053, 0.3025, 0.3020, 0.3021, 0.2993, 0.2996, 0.3000, 0.3004, 0.3011, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017, 0.3017],
        [0.2671, 0.2671, 0.2671, 0.2671, 0.2671, 0.2671, 0.2671, 0.2671, 0.2844, 0.2799, 0.2770, 0.2764, 0.2765, 0.2734, 0.2736, 0.2739, 0.2742, 0.2748, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753, 0.2753],
        [0.2409, 0.2409, 0.2409, 0.2409, 0.2409, 0.2409, 0.2409, 0.2409, 0.2586, 0.2538, 0.2509, 0.2501, 0.2502, 0.2470, 0.2470, 0.2471, 0.2473, 0.2478, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483, 0.2483],
        [0.2142, 0.2142, 0.2142, 0.2142, 0.2142, 0.2142, 0.2142, 0.2142, 0.2323, 0.2272, 0.2241, 0.2232, 0.2234, 0.2198, 0.2197, 0.2196, 0.2198, 0.2201, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206, 0.2206],
        [0.1868, 0.1868, 0.1868, 0.1868, 0.1868, 0.1868, 0.1868, 0.1868, 0.2053, 0.1998, 0.1967, 0.1957, 0.1958, 0.1920, 0.1917, 0.1914, 0.1916, 0.1917, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921, 0.1921],
    ]
}