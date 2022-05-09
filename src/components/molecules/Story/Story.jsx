import { Box, Text, VStack } from '@chakra-ui/react'

const list = [
    {
        id: 1,
        name: 'Đã mua',
        value: 32,
        color: 'yellow',
    },
    {
        id: 2,
        name: 'Voucher Đã sử dụng',
        value: 26,
        color: 'green',
    },
    {
        id: 3,
        name: 'Thâm niên',
        value: 6,
        color: 'cadet',
    },
]

function Story() {
    return (
        <VStack as="ul" spacing={0} listStyleType="none">
            {list.map(item => (
                <Box
                    key={item.id}
                    as="li"
                    w="full"
                    py={3}
                    px={5}
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottomWidth={1}
                    borderColor="brand.light"
                >
                    <Text color="brand.dark">{item.name}</Text>
                    <Text color={`brand.${item.color}`} fontWeight="bold">
                        {item.value}
                    </Text>
                </Box>
            ))}
        </VStack>
    )
}

export default Story
