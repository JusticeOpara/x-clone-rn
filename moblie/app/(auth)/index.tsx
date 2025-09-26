import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const [isLoading] = useState(true);
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-center">
        <View className="flex-1 justify-center">
          <Image
            source={require("../../assets/images/auth-bg.png")}
            className="w-[100%]"
            resizeMode="contain"
          />
        </View>
        <View className="flex-col gap-2">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
            onPress={() => {}}
            disabled={isLoading}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            
              {isLoading ? (
                <ActivityIndicator size={"small"} color={"#000"} />
              ) : (
                     <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../../assets/images/google.png")}
                    className="size-10 mr-3"
                    resizeMode="contain"
                  />

                  <Text className="text-black text-base font-medium">
                    Contuine with Google
                  </Text>
                     </View>
              )}
 
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
            onPress={() => {}}
            disabled={isLoading}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <View className="flex-row items-center justify-center">
              {isLoading ? (
                <ActivityIndicator size={"small"} color={"#000"} />
              ) : (
                <>
                  <Image
                    source={require("../../assets/images/apple.png")}
                    className="size-14 mr-3"
                    resizeMode="contain"
                  />

                  <Text className="text-black text-base font-medium">
                    Contuine with Apple
                  </Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-center text-gray-500 text-sm leading-4 mx-6 px-2">
          By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
          <Text className="">Public Policy </Text>
          <Text className="">Cookie Use</Text>

        </Text>
      </View>
    </View>
  );
}
