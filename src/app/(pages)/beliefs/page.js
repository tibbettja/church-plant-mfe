import themeConfig from "@/configs/themeConfig";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid
        size={{ xs: 12, lg: 10, xl: 8 }}
        offset={{ xs: 0, lg: 1, xl: 2 }}
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography variant="h2" textAlign="center">
            Beliefs
          </Typography>
        </Grid>
        <Card component={Grid} size={12}>
          <CardHeader title="Holy Bible" />
          <CardContent>
            <Typography variant="body1">
              The Holy Bible, and only the Bible, is the authoritative Word of
              God. It alone is the final authority in determining all doctrinal
              truths. In its original writing, it is inspired, infallible and
              inerrant.
            </Typography>
            <Typography variant="subtitle2">
              (II Timothy 3:16; II Peter 1:20-21; Proverbs 30:5; Romans
              16:25-26)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Trinity" />
          <CardContent>
            <Typography variant="body1">
              There is one God, eternally existent in three persons: Father, Son
              and Holy Spirit. These three are coequal and co-eternal.
            </Typography>
            <Typography variant="subtitle2">
              (I John 5:7; Genesis 1:26; Matthew 3:16-17, 28:19; Luke 1:35;
              Isaiah 9:6; Hebrews 3:7-11)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Jesus Christ" />
          <CardContent>
            <Typography variant="body1">
              Jesus Christ is God the Son, the second person of the Trinity. On
              earth, Jesus was 100% God and 100% man. He is the only man ever to
              have lived a sinless life. He was born of a virgin, lived a
              sinless life, performed miracles, died on the cross for mankind
              and thus, atoned for our sins through the shedding of His blood.
              He rose from the dead on the third day according to the
              Scriptures, ascended to the right hand of the Father, and will
              return again in power and glory.
            </Typography>
            <Typography variant="subtitle2">
              (John 1:1,14, 20:28; I Timothy 3:16; Isaiah 9:6; Philippians
              2:5-6; I Timothy 2:5)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Virgin Birth" />
          <CardContent>
            <Typography variant="body1">
              Jesus Christ was conceived by God the Father, through the Holy
              Spirit (the third person of the Trinity) in the virgin Mary's
              womb; therefore, He is the Son of God.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 1:18, 25; Luke 1:35; Isaiah 7:14; Luke 1:27-35)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Redemption" />
          <CardContent>
            <Typography variant="body1">
              Man was created good and upright, but by voluntary transgression
              he fell; his only hope of redemption is in Jesus Christ, the Son
              of God.
            </Typography>
            <Typography variant="subtitle2">
              (Gen. 1:26-31, 3:1-7; Romans 5:12-21)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Regeneration" />
          <CardContent>
            <Typography variant="body1">
              For anyone to know God, regeneration by the Holy Spirit is
              absolutely essential.
            </Typography>
            <Typography variant="subtitle2">
              (John 6:44, 65; Matthew 19:28; Titus 3:5)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Salvation" />
          <CardContent>
            <Typography variant="body1">
              We are saved by grace through faith in Jesus Christ: His death,
              burial, and resurrection. Salvation is a gift from God, not a
              result of our good works or of any human efforts.
            </Typography>
            <Typography variant="subtitle2">
              (Ephesians 2:8-9; Galatians 2:16, 3:8; Titus 3:5; Romans 10:9-10;
              Acts 16:31; Hebrews 9:22)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Repentance" />
          <CardContent>
            <Typography variant="body1">
              Repentance is the commitment to turn away from sin in every area
              of our lives and to follow Christ, which allows us to receive His
              redemption and to be regenerated by the Holy Spirit. Thus, through
              repentance we receive forgiveness of sins and appropriate
              salvation.
            </Typography>
            <Typography variant="subtitle2">
              (Acts 2:21, 3:19; I John 1:9)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Sanctification" />
          <CardContent>
            <Typography variant="body1">
              Sanctification is the ongoing process of yielding to God's Word
              and His Spirit in order to complete the development of Christ's
              character in us. It is through the present ministry of the Holy
              Spirit and the Word of God that the Christian is enabled to live a
              Godly life.
            </Typography>
            <Typography variant="subtitle2">
              (I Thessalonians 4:3, 5:23; II Corinthians 3:18, 6:14-18, II
              Thessalonians 2:1-3, Romans 8:29, 12:1-2, Hebrews 2:11)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Jesus' Blood" />
          <CardContent>
            <Typography variant="body1">
              The Blood that Jesus Christ shed on the Cross of Calvary was
              sinless and is 100% sufficient to cleanse mankind of all sin.
              Jesus allowed Himself to be punished for both our sinfulness and
              our sins, enabling all those who believe to be free from the
              penalty of sin, which is death.
            </Typography>
            <Typography variant="subtitle2">
              (I John 1:7; Revelation 1:5, 5:9; Colossians 1:20; Romans 3:10-12,
              23, 5:9; John 1:29)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Jesus Christ Indwells All Believers" />
          <CardContent>
            <Typography variant="body1">
              Christians are people who have invited the Lord Jesus Christ to
              come and live inside them by His Holy Spirit. They relinquish the
              authority of their lives over to him thus making Jesus the Lord of
              their life as well as Savior. They put their trust in what Jesus
              accomplished for them when He died, was buried, and rose again
              from the dead.
            </Typography>
            <Typography variant="subtitle2">
              (John 1:12; John 14:17, 23; John 15:4; Romans 8:11; Revelation
              3:20)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Baptism in the Holy Spirit" />
          <CardContent>
            <Typography variant="body1">
              Given at Pentecost, it is the promise of the Father, sent by Jesus
              after His Ascension, to empower the Church to preach the Gospel
              throughout the whole earth.
            </Typography>
            <Typography variant="subtitle2">
              (Joel 2:28-29; Matthew 3:11; Mark 16:17; Acts 1:5,2:1-4, 17,
              38-39, 8:14-17, 10:38, 44-47, 11:15-17, 19:1-6)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="The Gifts of the Holy Spirit" />
          <CardContent>
            <Typography variant="body1">
              The Holy Spirit is manifested through a variety of spiritual gifts
              to build and sanctify the church, demonstrate the validity of the
              resurrection, and confirm the power of the Gospel. The Bible's
              lists of these gifts are not necessarily exhaustive, and the gifts
              may occur in various combinations. All believers are commanded to
              earnestly desire the manifestation of the gifts in their lives.
              These gifts always operate in harmony with the Scriptures and
              should never be used in violation of Biblical parameters.
            </Typography>
            <Typography variant="subtitle2">
              (Hebrews 2:4; Romans 1:11, 12 :4-8; Ephesians 4:16; I Timothy
              4:14; II Timothy 1:6-7; I Corinthians 12:1-31, 14:1-40; I Peter
              4:10)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="The Church" />
          <CardContent>
            <Typography variant="body1">
              The church is the Body of Christ, the habitation of God through
              the Spirit, with divine appointments for the fulfillment of Jesus'
              Great Commission. Every person who is born of the Spirit is an
              integral part of the church as a member of the body of believers.
              There is a spiritual unity of all believers in our Lord Jesus
              Christ.
            </Typography>
            <Typography variant="subtitle2">
              (Ephesians 1:22, 2:19-22; Hebrews 12:23; John 17:11, 20-23)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Sacraments" />
          <CardContent>
            <Typography variant="body1">
              <b>Water Baptism:</b> Following faith in the Lord Jesus Christ,
              the new convert is commanded by the Word of God to be baptized in
              water in the Name of the Father and of the Son and of the Holy
              Spirit.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 28:19; Acts 2:38; Mark 16:16; Acts 8:12, 36-38; 10:47-48)
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>The Lord's Supper:</b> A unique time of communion in the
              presence of God when the elements of bread and grape juice (the
              Body and Blood of the Lord Jesus Christ) 'are taken in remembrance
              of Jesus' sacrifice on the Cross.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 26:26-29; I Corinthians 10:16, 11:23-25)
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>Marriage:</b> We believe marriage is defined in the Bible as a
              covenant, a sacred bond between one man and one woman, instituted
              by and publicly entered into before God.
            </Typography>
            <Typography variant="subtitle2">(Matthew 19:4-6)</Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Healing of the Sick" />
          <CardContent>
            <Typography variant="body1">
              Healing of the sick is illustrated in the life and ministry of
              Jesus, and included in the commission of Jesus to His disciples.
              It is given as a sign, which is to follow believers. It is also a
              part of Jesus' work on the Cross and one of the gifts of the
              Spirit.
            </Typography>
            <Typography variant="subtitle2">
              (Psalm 103:2-3; Isaiah 53:5; Matthew 8:16-17; Mark 16:17-18; Acts
              8:6-7; James 5:14-16; I Corinthians 12:9, 28; Romans 11:29)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="God's Will for Provision" />
          <CardContent>
            <Typography variant="body1">
              It is the Father's will for believers to become whole, healthy and
              successful in all areas of life. But because of the fall, many may
              not receive the full benefits of God's will while on Earth. That
              fact, though, should never prevent all believers from seeking the
              full benefits of Christ's provision in order to better serve
              others.
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>Spiritual:</b>
            </Typography>
            <Typography variant="subtitle2">
              (John 3:3-11; II Corinthians 5:17-21; Romans 10:9-10)
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>Mental and Emotional:</b>
            </Typography>
            <Typography variant="subtitle2">
              (II Timothy 1:7, 2:11; Philippians 4:7-8; Romans 12:2; Isaiah
              26:3)
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>Physical:</b>
            </Typography>
            <Typography variant="subtitle2">
              (Isaiah 53:4,5; Matthew 8:17; I Peter 2:24)
            </Typography>
            <Divider />
            <Typography variant="body1">
              <b>Financial:</b>
            </Typography>
            <Typography variant="subtitle2">
              (Joshua 1:8; Malachi 3:10-11; Luke 6:38; II Corinthians 9:6-10;
              Deuteronomy 28:1-14; Psalm 34:10, 84:11; Philippians 4:19)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Ressurection" />
          <CardContent>
            <Typography variant="body1">
              Jesus Christ was physically resurrected from the dead in a
              glorified body three days after His death on the cross. In
              addition, both the saved and the lost will be resurrected; they
              that are saved to the resurrection of life and they that are lost
              to the resurrection of eternal damnation.
            </Typography>
            <Typography variant="subtitle2">
              (Luke 24:16, 36, 39; John 2:19-21, 20:26-28, 21:4; Acts 24:15; I
              Corinthians 15:42, 44; Philippians 1:21-23, 3:21)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Heaven" />
          <CardContent>
            <Typography variant="body1">
              Heaven is the eternal dwelling place for all believers in the
              Gospel of Jesus Christ.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 5:3, 12, 20, 6:20, 19:21, 25:34; John 17:24; II
              Corinthians 5:1; Hebrews 11:16; I Peter 1:4)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Hell" />
          <CardContent>
            <Typography variant="body1">
              After living one life on earth, the unbelievers will be judged by
              God and sent to Hell where they will be eternally tormented with
              the Devil and the Fallen Angels.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 25:41; Mark 9:43-48; Hebrews 9:27; Revelation 14:9-11,
              20:12-15, 21:8)
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={12}>
          <CardHeader title="Second Coming" />
          <CardContent>
            <Typography variant="body1">
              Jesus Christ will physically and visibly return to earth for the
              second time to establish His Kingdom. This will occur at a date
              undisclosed by the Scriptures.
            </Typography>
            <Typography variant="subtitle2">
              (Matthew 24:30, 26:63-64; Acts 1:9-11; I Thessalonians 4:15-17; II
              Thessalonians 1:7-8; Revelation 1:7)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Beliefs | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
