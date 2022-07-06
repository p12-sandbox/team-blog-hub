import Link from 'next/link'
import Image from 'next/image'
import { members } from '@members'
import { getMemberPath } from '@src/utils/helper'
import { Member } from '@src/types'

export const ScrollableMembers: React.FC = () => {
  let i: number
  let shuffledMember: Member[] = members
  for (i = members.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    let tmpStorage = shuffledMember[i]
    shuffledMember[i] = shuffledMember[rand]
    shuffledMember[rand] = tmpStorage
  }
  return (
    <div className="scrollable-members">
      {shuffledMember.map((shuffledMember, i) => (
        <Link key={`scrollable-member-${i}`} href={getMemberPath(shuffledMember.id)} passHref>
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <Image
                src={shuffledMember.avatarSrc}
                alt={shuffledMember.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{shuffledMember.name}</span>
          </a>
        </Link>
      ))}
    </div>
  )
}
