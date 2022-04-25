import React from 'react'
import Section, { SectionBody } from '../../components/organisms/Section/Section'
import Grid from '../../components/molecules/Grid/Grid'
import accessoriesData from '../../assets/fake-data/accessories'
import AccessoryCard from '../../components/molecules/AccessoryCard/AccessoryCard'


const Accessories = () => {
    return (
        <Section>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        accessoriesData.getAccessories(4).map((item, index) => (
                            <AccessoryCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />

                        ))
                    }
                </Grid>
            </SectionBody>
        </Section>
    )
}

export default Accessories