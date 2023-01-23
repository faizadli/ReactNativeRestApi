import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const BelajarScrollView = () => {
  return (
    <View style={styles.container}>
        <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
        >
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum culpa iure voluptatum excepturi obcaecati laboriosam perferendis sequi maiores! Eum recusandae ipsam deleniti sit fuga, velit, nihil labore, repellendus blanditiis corrupti rem officia est aliquam tenetur provident saepe optio sed vel necessitatibus accusantium! Dolore nulla placeat sequi ullam ab eaque corporis accusamus molestiae quibusdam architecto sint voluptatem illum cumque aliquam, nam, itaque iusto quo ea aut doloremque excepturi eveniet mollitia repudiandae. Quos deleniti consectetur sint vel quasi! Fugit autem ducimus rem perferendis. Omnis quam in temporibus! Porro molestias est, tempore ipsum beatae cumque consequatur at voluptas harum maiores fuga, ullam distinctio dicta velit molestiae quisquam, adipisci unde consectetur cupiditate perspiciatis illo? Soluta maiores optio vitae veritatis autem quis modi repellendus? Molestias temporibus odit id, perferendis quis in nihil fuga repudiandae perspiciatis corporis laborum ex ut aut omnis sapiente aliquid similique consequatur suscipit sint libero fugit vel. Ullam quam ut labore, architecto dolorem in rem modi laudantium assumenda atque, nam, aspernatur dignissimos tenetur delectus sequi natus sunt ipsa distinctio est odio. Itaque accusamus aperiam aspernatur sed, omnis placeat. Ipsa voluptates nostrum recusandae eligendi laborum nobis illum laudantium aliquid error optio! Molestias architecto labore vel fuga explicabo quo repellat placeat odio sed voluptatum.</Text>
            <Text style={styles.pt20}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum culpa iure voluptatum excepturi obcaecati laboriosam perferendis sequi maiores! Eum recusandae ipsam deleniti sit fuga, velit, nihil labore, repellendus blanditiis corrupti rem officia est aliquam tenetur provident saepe optio sed vel necessitatibus accusantium! Dolore nulla placeat sequi ullam ab eaque corporis accusamus molestiae quibusdam architecto sint voluptatem illum cumque aliquam, nam, itaque iusto quo ea aut doloremque excepturi eveniet mollitia repudiandae. Quos deleniti consectetur sint vel quasi! Fugit autem ducimus rem perferendis. Omnis quam in temporibus! Porro molestias est, tempore ipsum beatae cumque consequatur at voluptas harum maiores fuga, ullam distinctio dicta velit molestiae quisquam, adipisci unde consectetur cupiditate perspiciatis illo? Soluta maiores optio vitae veritatis autem quis modi repellendus? Molestias temporibus odit id, perferendis quis in nihil fuga repudiandae perspiciatis corporis laborum ex ut aut omnis sapiente aliquid similique consequatur suscipit sint libero fugit vel. Ullam quam ut labore, architecto dolorem in rem modi laudantium assumenda atque, nam, aspernatur dignissimos tenetur delectus sequi natus sunt ipsa distinctio est odio. Itaque accusamus aperiam aspernatur sed, omnis placeat. Ipsa voluptates nostrum recusandae eligendi laborum nobis illum laudantium aliquid error optio! Molestias architecto labore vel fuga explicabo quo repellat placeat odio sed voluptatum.</Text>
            <Text style={styles.pt20}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum culpa iure voluptatum excepturi obcaecati laboriosam perferendis sequi maiores! Eum recusandae ipsam deleniti sit fuga, velit, nihil labore, repellendus blanditiis corrupti rem officia est aliquam tenetur provident saepe optio sed vel necessitatibus accusantium! Dolore nulla placeat sequi ullam ab eaque corporis accusamus molestiae quibusdam architecto sint voluptatem illum cumque aliquam, nam, itaque iusto quo ea aut doloremque excepturi eveniet mollitia repudiandae. Quos deleniti consectetur sint vel quasi! Fugit autem ducimus rem perferendis. Omnis quam in temporibus! Porro molestias est, tempore ipsum beatae cumque consequatur at voluptas harum maiores fuga, ullam distinctio dicta velit molestiae quisquam, adipisci unde consectetur cupiditate perspiciatis illo? Soluta maiores optio vitae veritatis autem quis modi repellendus? Molestias temporibus odit id, perferendis quis in nihil fuga repudiandae perspiciatis corporis laborum ex ut aut omnis sapiente aliquid similique consequatur suscipit sint libero fugit vel. Ullam quam ut labore, architecto dolorem in rem modi laudantium assumenda atque, nam, aspernatur dignissimos tenetur delectus sequi natus sunt ipsa distinctio est odio. Itaque accusamus aperiam aspernatur sed, omnis placeat. Ipsa voluptates nostrum recusandae eligendi laborum nobis illum laudantium aliquid error optio! Molestias architecto labore vel fuga explicabo quo repellat placeat odio sed voluptatum.</Text>    
        </ScrollView>    
    </View>
  )
}

export default BelajarScrollView

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
    },
    pt20: {
        paddingTop:20,
    }
})