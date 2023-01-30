export function tokeniseReturnAll(inputText: string) {
  const lowercase = inputText.toLocaleLowerCase();

  const symbolsRemoved = lowercase
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/ +/g, " ")
    .trim();

  const stopWordsRemoved = stopWords
    .reduce(
      (str, stopWord) => ` ${str} `.replace(` ${stopWord} `, " "),
      symbolsRemoved
    )
    .trim();

  let splitIndex = 0;
  const tokens: string[] = [];

  for (const word of stopWordsRemoved.split(" ")) {
    tokens.push(stopWordsRemoved.substring(splitIndex));
    splitIndex += word.length + 1;
  }

  return {
    lowercase,
    symbolsRemoved,
    stopWordsRemoved,
    tokens,
  };
}

export function cleanText(inputText: string): string {
  const cleanTextWithStopwords = inputText
    //   1. Convert to lowercase
    .toLocaleLowerCase()
    //   2a. Flatten symbols & boundary characters into a standard character
    .replace(/[^a-z0-9 ]/g, " ")
    //   2b. reduce to 1 sequential delimiter
    .replace(/ +/g, " ")
    .trim();

  //   3. Remove stop words (words insignificant to searching, i.e 'the', 'is', 'a', 'their')
  return stopWords
    .reduce(
      (str, stopWord) => ` ${str} `.replace(` ${stopWord} `, " "),
      cleanTextWithStopwords
    )
    .trim();
}

export function tokenise(inputText: string) {
  const cleanedText = cleanText(inputText);

  //   4. Break into tokens on boundaries (delimiters such as hyphen, space, parentheses)
  let splitIndex = 0;
  const tokens: string[] = [];
  for (const word of cleanedText.split(" ")) {
    tokens.push(cleanedText.substring(splitIndex));
    splitIndex += word.length + 1;
  }

  return tokens;
}

const stopWords = `i
me
my
myself
we
our
ours
ourselves
you
your
yours
yourself
yourselves
he
him
his
himself
she
her
hers
herself
it
its
itself
they
them
their
theirs
themselves
what
which
who
whom
this
that
these
those
am
is
are
was
were
be
been
being
have
has
had
having
do
does
did
doing
a
an
the
and
but
if
or
because
as
until
while
of
at
by
for
with
about
against
between
into
through
during
before
after
above
below
to
from
up
down
in
out
on
off
over
under
again
further
then
once
here
there
when
where
why
how
all
any
both
each
few
more
most
other
some
such
no
nor
not
only
own
same
so
than
too
very
s
t
can
will
just
don
should
now`.split("\n");
