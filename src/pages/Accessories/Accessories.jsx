import React from 'react'
import accessoriesData from '../../assets/fake-data/accessories'
import Grid from '../../components/molecules/Grid/Grid'
import ProductCard from '../../components/organisms/ProductCard/ProductCard'
import Section, { SectionBody } from '../../components/organisms/Section/Section'
import Helmet from '../../components/templates/Helmet/Helmet'

const Accessories = () => {
    return (
        <Helmet title='Phụ kiện'>
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
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    type='accessories'
                                />

                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Accessories